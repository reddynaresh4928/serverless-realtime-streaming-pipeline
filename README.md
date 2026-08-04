# 🚀 Serverless Event-Driven Data Processing Pipeline on AWS

## 📖 Overview

This project demonstrates a serverless event-driven architecture built on AWS.

A Node.js IoT event simulator generates random sensor events and sends them to Amazon SQS. AWS Lambda automatically processes incoming messages from the queue and records execution details in Amazon CloudWatch Logs. The project is being developed incrementally, with additional AWS services such as DynamoDB, API Gateway, and a Next.js dashboard planned in future phases.

---

## 🏗 Architecture

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

## 🛠 Tech Stack

### Frontend

- Next.js (Planned)

### Backend

- Node.js
- AWS Lambda

### AWS Services

- Amazon SQS
- AWS Lambda
- Amazon S3
- Amazon CloudWatch
- IAM
- AWS CLI

### Tools

- Git
- GitHub
- VS Code

---

## ✨ Features

- Serverless event-driven architecture
- IoT event simulator using Node.js
- Automatic message processing with AWS Lambda
- Message queuing using Amazon SQS
- CloudWatch logging for monitoring
- Modular project structure
- AWS CLI integration

---

## 📅 Development Progress

### ✅ Completed

- Day 1 – Project Setup
- Day 2 – AWS Setup (IAM, AWS CLI, S3)
- Day 3 – Amazon SQS & IoT Event Simulator
- Day 4 – AWS Lambda & CloudWatch Integration

### ⏳ Upcoming

- Day 5 – DynamoDB Integration
- Day 6 – API Gateway
- Day 7 – Next.js Dashboard
- Day 8 – Monitoring Enhancements
- Day 9 – S3 Report Storage
- Day 10 – Final Deployment & Documentation

---

## 📌 Current Workflow

```text
IoT Simulator
      │
      ▼
Amazon SQS
      │
      ▼
AWS Lambda
      │
      ▼
CloudWatch Logs
```

---

## 🚀 Current Project Status

- ✅ AWS IAM configured
- ✅ AWS CLI configured
- ✅ Amazon S3 bucket created
- ✅ Amazon SQS queue created
- ✅ Node.js IoT event simulator developed
- ✅ AWS SDK integrated
- ✅ AWS Lambda function created
- ✅ SQS trigger connected to Lambda
- ✅ CloudWatch logging verified
- ⏳ DynamoDB integration in progress