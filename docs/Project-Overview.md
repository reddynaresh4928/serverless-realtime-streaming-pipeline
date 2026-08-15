# Project Overview

## Project Name

**Serverless Real-Time IoT Monitoring Platform on AWS**

---

## Description

The **Serverless Real-Time IoT Monitoring Platform** is a cloud-native application that demonstrates how AWS serverless technologies can be used to build a scalable, secure, and real-time IoT monitoring solution.

A Node.js IoT simulator continuously generates random sensor data such as temperature and humidity readings. These events are sent to Amazon SQS, automatically processed by AWS Lambda, stored in Amazon DynamoDB, and exposed through Amazon API Gateway.

Users interact with the system through a modern Next.js dashboard that provides real-time device monitoring, analytics, alerts, and report generation. The platform includes secure authentication using Express.js, MongoDB Atlas, JWT, and protected routes. Generated reports are stored in Amazon S3, while Amazon CloudWatch provides monitoring and logging. Amazon SNS and Amazon SES are integrated to deliver alerts and email reports.

---

# Objectives

- Build a scalable serverless IoT monitoring platform
- Learn AWS Event-Driven Architecture
- Implement Serverless Computing using AWS Lambda
- Process IoT sensor events asynchronously using Amazon SQS
- Store IoT data in Amazon DynamoDB
- Expose REST APIs using Amazon API Gateway
- Develop a secure authentication system using Express.js, MongoDB Atlas, and JWT
- Build a modern real-time dashboard using Next.js and Tailwind CSS
- Generate downloadable reports stored in Amazon S3
- Monitor AWS services using Amazon CloudWatch
- Send notifications using Amazon SNS
- Deliver reports through Amazon SES
- Apply cloud-native architecture and best practices

---

# Key Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User Profile
- Logout
- Authentication Context

---

## IoT Monitoring

- Real-Time Dashboard
- Live Device Monitoring
- Temperature Monitoring
- Humidity Monitoring
- Device Analytics
- Device Details
- AI Insights
- Search & Filter
- System Health Monitoring

---

## Reports

- Generate Reports
- Export CSV
- Export PDF
- Amazon S3 Report Storage
- Report History

---

## AWS Services

- Amazon SQS
- AWS Lambda
- Amazon DynamoDB
- Amazon API Gateway
- Amazon S3
- Amazon CloudWatch
- Amazon SNS
- Amazon SES
- IAM

---

## Dashboard Features

- KPI Cards
- Charts
- Live Activity
- Device Overview
- Alerts
- Dark Mode
- Responsive Design

---

# System Architecture

```text
                 Next.js Frontend
                        │
      ┌─────────────────┼─────────────────┐
      ▼                 ▼                 ▼
 Authentication    Dashboard        Reports
      │                 │
      ▼                 ▼
 Express Backend   API Gateway
      │                 │
      ▼                 ▼
 MongoDB Atlas     AWS Lambda
                        │
        ┌───────────────┼───────────────┐
        ▼               ▼               ▼
 Amazon DynamoDB   CloudWatch Logs   Amazon S3
        ▲                               │
        │                               ▼
 Amazon SQS Queue                 Generated Reports
        ▲
        │
 Node.js IoT Simulator
```

---

# Current Implementation

The application currently includes:

- Node.js IoT Event Simulator
- Amazon SQS Queue
- AWS Lambda Processing
- Amazon DynamoDB Storage
- Amazon API Gateway
- Express.js Backend
- MongoDB Atlas Authentication
- JWT Authorization
- Next.js Dashboard
- Real-Time Device Monitoring
- Device Analytics
- User Profile
- AI Insights
- Report Generation
- Amazon S3 Integration
- CloudWatch Monitoring
- Amazon SNS Notifications
- Amazon SES Email Reports
- Settings Management
- Responsive User Interface

---

# Project Workflow

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
Amazon DynamoDB
        │
        ▼
Amazon API Gateway
        │
        ▼
Express Backend
        │
        ▼
Next.js Dashboard
        │
        ├────────► User Authentication (MongoDB Atlas)
        │
        ├────────► Report Generation (Amazon S3)
        │
        ├────────► Notifications (Amazon SNS)
        │
        └────────► Email Reports (Amazon SES)
```

---

# Expected Outcome

The completed platform provides:

- Secure User Authentication
- Real-Time IoT Monitoring
- Cloud-Native Serverless Architecture
- Interactive Analytics Dashboard
- Device Health Monitoring
- Automated Report Generation
- Cloud Storage using Amazon S3
- Monitoring with Amazon CloudWatch
- Notifications through Amazon SNS
- Email Report Delivery using Amazon SES
- Scalable and Production-Ready AWS Infrastructure

---

# Learning Outcomes

Through this project, the following concepts were implemented and demonstrated:

- Serverless Computing
- Event-Driven Architecture
- AWS Cloud Services Integration
- Real-Time Data Processing
- REST API Development
- Secure Authentication with JWT
- Full-Stack Web Development
- Cloud Storage and Monitoring
- Responsive UI Development
- Modern Software Architecture