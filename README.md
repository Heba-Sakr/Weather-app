# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.
Congratulations on completing your project! Here's a basic installation guide that you can use for your GitHub repository. You can copy and adjust this as needed based on your specific setup.

---

# Installation Guide

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- **Node.js** (v14 or higher)
- **MongoDB** (if you're running the database locally, otherwise, you can use a cloud MongoDB service)
- **npm** (Node Package Manager, comes with Node.js)
- **Git** (to clone the repository)

---

## Getting Started

Follow the steps below to set up the project locally.

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Heba-Sakr/Weather-app.git
cd your-project-name
```

### 2. Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

This will install both frontend and backend dependencies.

### 3. Set Up Environment Variables

Create a `.env` file in the root of the backend folder (`/backend`) to store your environment variables:

```bash
touch backend/.env
```

Open the `.env` file and add the following configuration:

```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/weather-app  # Change if using a cloud MongoDB service
WEATHER_API_KEY=your_openweathermap_api_key  # Replace with your actual API key
BASE_URL=https://api.openweathermap.org/data/2.5/weather
```

Make sure to replace `your_openweathermap_api_key` with your actual OpenWeatherMap API key. You can sign up for a free account at [OpenWeatherMap](https://openweathermap.org/) to get an API key.

### 4. Run the Backend Server

To start the backend server, run:

```bash
cd backend
npm start
```

This will start the backend server on `http://localhost:3000`.

### 5. Run the Frontend Application

Once the backend is running, go back to the frontend directory and install the necessary dependencies:

```bash
cd src
npm install
```

Now, start the frontend development server:

```bash
npm start
```

This will start the frontend application at `http://localhost:4200`.

---
Access the app:

Backend: http://localhost:3000
Frontend: http://localhost:4200

## Additional Information

- **MongoDB**: If you're using MongoDB locally, ensure it's running on your machine. Alternatively, you can use a cloud database like MongoDB Atlas.
- **API Key**: Ensure your OpenWeatherMap API key is valid and placed correctly in the `.env` file.
- **CORS**: If you are running the frontend and backend on different ports, CORS (Cross-Origin Resource Sharing) might need to be handled in the backend. This is typically done by using a package like `cors` in the backend.

---


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
