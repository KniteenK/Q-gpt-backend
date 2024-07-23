# Frontend for Q-gpt

This project aims to solve the cumbersome and time-consuming process of data retrieval from databases by providing a chatbot-like interface to query in English for faster and more reliable responses.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [Help](#Help)

## Overview

The backend of Q-gpt is built using Node.js and Express. It provides API endpoints for user authentication, file uploads, and data processing. The backend interacts with Firebase for user management and data storage.

## Features

- User authentication (Sign Up, Login, Google Sign-In)
- File upload handling with support for JSON and CSV files
- Data processing and storage using Firebase Realtime Database
- Secure authentication with Firebase Admin SDK

## Installation
Clone the repository:

```bash
  git clone https://github.com/yourusername/q-gpt-backend.git
  cd q-gpt-backend
```
2. Install dependencies:
   ```bash
   npm i
## Configuration
1. Create a .env file in the root directory and add the following environment variables:
   ```bash
   PORT = 3000
   DATABASE_URL=your-database-url (We used firebase realtime db)
   WEBKEY_API=your-webkey-api
   RAPIDAPI_KEY=your-rapidapi-key
2. Create a firebaseConfig.json file in the root directory and add your configurations

## Usage
1. Start the development server :
    ```bash
    npm run start
3. You'll have to run the frontend to access the  application . (url for backend : https://github.com/KniteenK/Q-gpt-frontend)

## Contribution 
If you want to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that you follow the coding standards and provide appropriate tests.

## Help
If you have any suggestion , feedback or anything you want to say in general , you can reach out to me via email : kniteen38@gmail.com 


