# Architecture

```
                 Node.js Event Simulator
                          │
                          ▼
                    Amazon SQS Queue
                          │
                          ▼
                     AWS Lambda
                          │
                          ▼
                  Amazon DynamoDB
                          │
                          ▼
                  Amazon API Gateway
                          │
                          ▼
                 Next.js Dashboard
                          │
                          ▼
                Amazon S3 (Reports)
```

## Components

### Node.js Simulator

Generates fake IoT sensor events.

### Amazon SQS

Receives events from the simulator.

### AWS Lambda

Processes each incoming event.

### DynamoDB

Stores processed event data.

### API Gateway

Provides REST APIs.

### Next.js Dashboard

Displays events and analytics.

### CloudWatch

Stores logs and metrics.

### Amazon S3

Stores reports and backups.