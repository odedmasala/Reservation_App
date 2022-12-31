# Reservation App

Welcome to the Reservation App, a platform for booking vacations. The app includes an `admin` dashboard built with React and SCSS, an `api` server built with Node.js, express.js, cookie-parser, jsonwebtoken, and mongoose, and a `client` app built with React and Tailwind CSS for booking vacations.

## Project Description

The Reservation App is a platform for booking vacations. It includes an `admin` dashboard for managing bookings and a `client` app for users to browse and book vacations. The `api` server serves as the backend for the entire app, providing the necessary data and functionality.

The `admin` dashboard is built with React and SCSS, and uses the Material-UI library for the user interface. The `api` server is built with Node.js, express.js, cookie-parser, jsonwebtoken, and mongoose, and uses a MongoDB database to store data. The `client` app is built with React and Tailwind CSS and allows users to browse and book vacations.

## Notable Features

- React: The `admin` dashboard and `client` app are both built with the React library for efficient and interactive user experience.

- SCSS and Tailwind CSS: The `admin` dashboard uses SCSS for styling and the `client` app uses Tailwind CSS for styling.

- Material-UI: The `admin` dashboard uses the Material-UI library for the user interface.

- Node.js, express.js, cookie-parser, jsonwebtoken, and mongoose: The `api` server is built with Node.js, express.js, cookie-parser, jsonwebtoken, and mongoose, providing the necessary data and functionality for the entire app.

## Getting Started

To get started with the Reservation App, you will need to have the following prerequisites installed on your machine:

- Node.js
- npm or yarn
- MongoDB

You will also need to set up a MongoDB database and set the `MONGO` environment variable in the `api/.env` file to the connection string for your database. You will also need to set the `JWT` environment variable in the `api/.env` file to a secret string for generating JSON Web Tokens.

Once you have these prerequisites installed and the `MONGO` and `JWT` environment variables set, you can follow the steps below to set up the app:

1. Clone the repository to your local machine using `git clone https://github.com/[your-username]/Reservation-App.git`.
2. Navigate to the `api` directory and install the dependencies using `npm install` or `yarn install`.
3. Start the `api` server using `npm start` or `yarn start`.
4. Navigate to the `admin` directory and install the dependencies using `npm install` or `yarn install`.
5. Start the `admin` dashboard using `npm start` or `yarn start`.
6. Navigate to the `client` directory and install the dependencies using `npm install` or `yarn install`.
7. Start the `client` app using `npm start` or `yarn start`.
8. The `admin` dashboard should now be running on `http://localhost:3001`, the `client` app should be running on `http://localhost:3000`, and the `api` server should be running on `http://localhost:3002`.

## Building for Production

To build the `admin` dashboard and `client` app for production, run the following commands in the respective directories:
Certainly! Here is the rest of the revised README file for the Reservation App:

Copy code
2. Navigate to the `api` directory and install the dependencies using `npm install` or `yarn install`.
3. Start the `api` server using `npm start` or `yarn start`.
4. Navigate to the `admin` directory and install the dependencies using `npm install` or `yarn install`.
5. Start the `admin` dashboard using `npm start` or `yarn start`.
6. Navigate to the `client` directory and install the dependencies using `npm install` or `yarn install`.
7. Start the `client` app using `npm start` or `yarn start`.
8. The `admin` dashboard should now be running on `http://localhost:3001`, the `client` app should be running on `http://localhost:3000`, and the `api` server should be running on `http://localhost:3002`.

## Building for Production

To build the `admin` dashboard and `client` app for production, run the following commands in the respective directories:

npm run build
or 
yarn build


This will create a production-ready build of the app in the `build` directory.

## Contributing

If you are interested in contributing to the Reservation App, please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Make your changes and commit them to your branch.
- Open a pull request and provide a clear and concise description of your changes.
