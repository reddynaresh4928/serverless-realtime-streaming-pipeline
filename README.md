# 🚀 Serverless Real-Time IoT Monitoring Platform on AWS

## 📖 Overview

The **Serverless Real-Time IoT Monitoring Platform** is a cloud-native application built using AWS serverless services and modern web technologies.

The platform simulates IoT devices that continuously generate sensor readings such as temperature and humidity. Events are sent to Amazon SQS, processed by AWS Lambda, stored in Amazon DynamoDB, and visualized through a modern Next.js dashboard.

The project also includes secure user authentication using Express.js, MongoDB Atlas, JWT, and role-based protected routes. Reports can be generated and stored in Amazon S3, while CloudWatch provides monitoring and logging.

---

# ✨ Features

- Real-time IoT Monitoring Dashboard
- Secure User Authentication (JWT)
- User Registration & Login
- Protected Routes
- User Profile
- Device Monitoring
- Temperature & Humidity Charts
- Live Device Activity
- AI Insights
- Search & Filter
- Report Generation
- Amazon S3 Report Storage
- CloudWatch Monitoring
- SNS Notifications
- Amazon SES Email Reports
- Dark Mode
- Responsive Design

---

# 🏗 System Architecture

```text
             IoT Device Simulator
                      │
                      ▼
               Amazon SQS Queue
                      │
                      ▼
                 AWS Lambda
                      │
         ┌────────────┴────────────┐
         ▼                         ▼
 Amazon DynamoDB          CloudWatch Logs
         │
         ▼
      API Gateway
         │
         ▼
    Express Backend
         │
         ▼
   MongoDB Atlas
         │
         ▼
      Next.js Frontend

🛠 Tech Stack:
*Frontend
*Next.js
*React
*Tailwind CSS
*Axios
*Recharts
*Lucide React
*Backend
*Node.js
*Express.js
*JWT Authentication
*MongoDB Atlas
*AWS Services
*API Gateway
*Lambda
*DynamoDB
*Amazon SQS
*Amazon S3
*CloudWatch
*Amazon SNS
*Amazon SES
*IAM

Database:
*MongoDB Atlas
*Amazon DynamoDB

🚀 Current Features:
*User Authentication
*JWT Authorization
*Protected Dashboard
*Device Overview
*Real-Time Monitoring
*Device Details
*Alerts
*Charts
*Report Generation
*Report Download
*CloudWatch Monitoring
*Profile Page
*Settings
*Export CSV
*Export PDF
*AI Insights