# Project Overview

## Project Name

Serverless Event-Driven Data Processing Pipeline on AWS

---

## Description

This project demonstrates how event-driven systems work in cloud environments using AWS serverless services.

A JavaScript event simulator generates IoT-style events. Amazon SQS receives those events. AWS Lambda processes them and stores the processed data in DynamoDB.

API Gateway exposes APIs for a Next.js dashboard which visualizes events in near real-time.

CloudWatch monitors logs while Amazon S3 stores backup files and reports.

---

## Objectives

- Learn Event-Driven Architecture
- Learn Serverless Computing
- Work with AWS Services
- Build a production-style cloud application
- Understand cloud monitoring
- Build a real-time dashboard

---

## Expected Outcome

A fully working event-driven cloud application capable of receiving, processing, storing, and visualizing cloud events.