# Krsnaverse

Krsnaverse is a web application dedicated to spreading the teachings and consciousness of Lord Krishna, inspired by ISKCON (International Society for Krishna Consciousness). It aims to provide a platform for individuals to learn, explore, and engage with the philosophy, practices, and community of ISKCON.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Team Members](#team-members)
- [Usage](#usage)

## About

Krsnaverse serves as a digital portal for individuals interested in understanding and experiencing the essence of Lord Krishna's teachings and the culture of ISKCON. Through various features and resources, it seeks to foster spiritual growth, community interaction, and personal development.

## Features

- **OTP Verification**: Secure user authentication and account verification through OTP (One-Time Password).
- **Events**: Explore and participate in ISKCON events, gatherings, and festivals.
- **Travel**: Discover and plan spiritual journeys and pilgrimages to sacred places related to Lord Krishna.
- **Purchase Books**: Browse, search, and buy books related to the philosophy, teachings, and literature of ISKCON.
- **Book Cart**: Manage and organize selected books for purchase with a user-friendly cart feature.
- **Dynamic Frontend**: Engage with a dynamic and interactive user interface that adapts to user preferences and actions.
- **Payment Gateway**: Securely process online payments for purchases and donations through integrated payment gateways.

## Screenshots

![Screenshot 1](images/home.png)
![Screenshot 1](images/aboutus.png)
![Screenshot 1](images/travels.png)
![Screenshot 1](images/events.png)
![Screenshot 1](images/book.png)
![Screenshot 1](images/music.png)

## Team Members

#### 1. Rishabh Jain

#### 2. Vipin Sharma

#### 3. Viren Makvana

## Usage

### Environment variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```bash
DATABASE_URI="YOUR_MONGODB_URI"
PORT=YOUR_PORT_NUMBER
DB_NAME='YOUR_DB_NAME'
JWT_SECRET="YOUR_JWT_SECRET"
SMTP_EMAIL="YOUR_SMTP_EMAIL"
SMTP_PASSWORD="YOUR_SMTP_PASSWORD"
SMTP_APP_PASSWORD="YOUR_SMTP_APP_PASSWORD"
```

### Frontend

To start the frontend server, run:

```bash
cd ./frontend
npm install
npm start
```

### Backend

To start the backend server, run:

```bash
cd ./backend
npm install -g nodemon && npm install
nodemon app.js
```
