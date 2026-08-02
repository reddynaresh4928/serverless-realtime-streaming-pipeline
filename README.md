# 🚀 Serverless Event-Driven Data Processing Pipeline on AWS

## 📖 Overview

This project demonstrates a complete serverless event-driven architecture built on AWS.

A Node.js event simulator generates sensor events which are pushed into Amazon SQS. AWS Lambda processes each event and stores it in Amazon DynamoDB. API Gateway exposes REST APIs which are consumed by a Next.js dashboard for real-time visualization. Amazon S3 is used for storing reports and backup files, while CloudWatch provides monitoring and logging.

---

## 🏗 Architecture

Node.js Event Simulator

↓

Amazon SQS

↓

AWS Lambda

↓

Amazon DynamoDB

↓

Amazon API Gateway

↓

Next.js Dashboard

↓

Amazon S3

---

## 🛠 Tech Stack

### Frontend

- Next.js
- JavaScript
- Tailwind CSS

### Backend

- AWS Lambda
- Node.js

### AWS Services

- Amazon SQS
- Amazon DynamoDB
- Amazon S3
- Amazon API Gateway
- Amazon CloudWatch
- IAM

### Tools

- Git
- GitHub
- AWS CLI
- VS Code

---

## 🎯 Features

- Event-driven architecture
- Serverless computing
- Real-time dashboard
- Cloud monitoring
- Scalable backend
- REST APIs
- Cloud storage

---

## 📅 Development Roadmap

- ✅ Day 1 – Project Setup
- ✅ Day 2 – AWS Setup
- 🔄 Day 3 – Amazon SQS
- ⏳ Day 4 – AWS Lambda
- ⏳ Day 5 – DynamoDB
- ⏳ Day 6 – API Gateway
- ⏳ Day 7 – Next.js Dashboard
- ⏳ Day 8 – CloudWatch
- ⏳ Day 9 – Testing
- ⏳ Day 10 – Deployment