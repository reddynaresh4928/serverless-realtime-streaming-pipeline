# Architecture

```text
                 Node.js IoT Simulator
                          │
                          ▼
                    Amazon SQS Queue
                          │
                          ▼
                     AWS Lambda
                          │
                          ▼
                  Amazon CloudWatch Logs
```

---

# Components

## Node.js IoT Simulator

Generates random IoT sensor events including:

- Device ID
- Temperature
- Humidity
- Timestamp

The simulator sends each event to Amazon SQS using the AWS SDK.

---

## Amazon SQS

Acts as the message queue for incoming IoT events.

It decouples the event producer from the event consumer and ensures reliable message delivery.

---

## AWS Lambda

Automatically triggered whenever a new message arrives in the SQS queue.

Responsibilities:

- Receive messages from Amazon SQS
- Parse the JSON payload
- Process incoming IoT events
- Log execution details to CloudWatch

---

## Amazon CloudWatch Logs

Captures Lambda execution logs for monitoring and debugging.

CloudWatch allows verification that events are successfully processed by the Lambda function.

---

# Current Workflow

```text
Node.js IoT Simulator
        │
        ▼
Amazon SQS Queue
        │
        ▼
AWS Lambda
        │
        ▼
CloudWatch Logs
```

---

# Upcoming Enhancements

The following components will be added in the next development phases:

- Amazon DynamoDB (Persistent event storage)
- Amazon API Gateway (REST APIs)
- Next.js Dashboard (Real-time visualization)
- Amazon S3 (Report storage and backups)