# Project Overview

## Project Name

**Serverless Event-Driven Data Processing Pipeline on AWS**

---

## Description

This project demonstrates how event-driven systems work in cloud environments using AWS serverless services.

A Node.js IoT event simulator generates random sensor events and sends them to Amazon SQS. AWS Lambda automatically processes each incoming message and records execution details in Amazon CloudWatch Logs.

The project is being developed incrementally. Future phases will integrate Amazon DynamoDB for persistent storage, API Gateway for REST APIs, and a Next.js dashboard for real-time visualization.

---

## Objectives

- Understand Event-Driven Architecture
- Learn Serverless Computing on AWS
- Build cloud-native applications using AWS services
- Simulate and process IoT sensor events
- Implement asynchronous message processing with Amazon SQS
- Process events using AWS Lambda
- Monitor applications using Amazon CloudWatch
- Extend the project with DynamoDB, API Gateway, and Next.js

---

## Current Implementation

The application currently includes:

- Node.js IoT Event Simulator
- Amazon SQS Queue
- AWS Lambda Function
- Amazon CloudWatch Logging

Current workflow:

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

## Expected Outcome

By the end of the project, the application will evolve into a complete serverless event-driven data processing pipeline capable of:

- Receiving IoT sensor events
- Processing events asynchronously
- Storing processed data in Amazon DynamoDB
- Exposing REST APIs using API Gateway
- Visualizing data through a Next.js dashboard
- Monitoring system activity with CloudWatch
- Storing reports and backups in Amazon S3