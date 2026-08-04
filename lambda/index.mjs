export const handler = async (event) => {
  console.log("===============================");
  console.log("Lambda Triggered");
  console.log("===============================");

  console.log(JSON.stringify(event, null, 2));

  for (const record of event.Records) {
    const message = JSON.parse(record.body);

    console.log("Received Event");
    console.log(message);
    console.log("------------------------------");
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Events processed successfully",
    }),
  };
};