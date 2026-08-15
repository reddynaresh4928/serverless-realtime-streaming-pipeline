# Architecture

## High-Level Architecture

```text
                Next.js Frontend
                        │
      ┌─────────────────┼──────────────────┐
      ▼                 ▼                  ▼
 Authentication    Dashboard         Reports
      │                 │
      ▼                 ▼
 Express Backend   API Gateway
      │                 │
      ▼                 ▼
 MongoDB Atlas    AWS Lambda
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
   DynamoDB         CloudWatch        Amazon S3
        │                               │
        ▼                               ▼
  IoT Events                    Generated Reports

                ▲
                │
          Amazon SQS
                ▲
                │
      Node.js IoT Simulator

Components:
Next.js
Professional dashboard for monitoring IoT devices.
Express Backend
Authentication APIs
JWT
User management
MongoDB Atlas
Stores users.
Amazon SQS
Receives IoT events.
AWS Lambda
Processes IoT events.
Amazon DynamoDB
Stores processed IoT events.
Amazon S3
Stores generated reports.
Amazon CloudWatch
Monitoring and logging.
Amazon SNS
Notifications.
Amazon SES
Email reports.