import { generateEvent } from "./utils/eventGenerator.js";
import { sendMessage } from "./services/sqsService.js";

async function produceEvents() {
  console.log("=================================");
  console.log("Starting IoT Event Simulator");
  console.log("=================================\n");

  while (true) {
    try {
      const event = generateEvent();

      console.log("Generated Event:");
      console.log(event);

      const response = await sendMessage(event);

      console.log(
        "Message Sent Successfully"
      );

      console.log(
        "Message ID:",
        response.MessageId
      );

      console.log("--------------------------------");

    } catch (error) {
      console.error(error);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
  }
}

produceEvents();