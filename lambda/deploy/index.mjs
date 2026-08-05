import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    console.log("================================");
    console.log("Lambda Triggered");
    console.log("================================");

    try {
        for (const record of event.Records) {
            const body = JSON.parse(record.body);

            console.log("Received Event:", body);

            await docClient.send(
                new PutCommand({
                    TableName: "iot-events",
                    Item: {
                        deviceId: body.deviceId,
                        timestamp: body.timestamp,
                        temperature: body.temperature,
                        humidity: body.humidity
                    }
                })
            );

            console.log("✅ Event saved to DynamoDB");
            console.log("--------------------------------");
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Events processed successfully"
            })
        };

    } catch (error) {
        console.error("❌ Error saving event:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Error processing events",
                error: error.message
            })
        };
    }
};