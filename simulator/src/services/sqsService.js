import {
  SendMessageCommand,
} from "@aws-sdk/client-sqs";

import dotenv from "dotenv";
import sqsClient from "../config/aws.js";

dotenv.config();

export async function sendMessage(event) {
  const params = {
    QueueUrl: process.env.QUEUE_URL,
    MessageBody: JSON.stringify(event),
  };

  const command = new SendMessageCommand(params);

  const response = await sqsClient.send(command);

  return response;
}