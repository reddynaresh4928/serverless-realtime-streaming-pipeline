import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const handler = async () => {

    console.log("================================");
    console.log("Fetching IoT Events");
    console.log("================================");

    try {

        const response = await docClient.send(
            new ScanCommand({
                TableName: "iot-events"
            })
        );

        console.log("Events Retrieved:", response.Items);

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(response.Items)
        };

    } catch (error) {

        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Error fetching events",
                error: error.message
            })
        };
    }
};