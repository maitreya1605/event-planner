# Event Planner Application

This is a full-stack Event Planner application built with React (Vite) for the frontend and Node.js/Express for the backend.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running locally on default port 27017)

## Getting Started

Follow these steps to set up and run the project.

### 1. Backend Setup

The backend handles the API and database connections.

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```

2.  Install backend dependencies:
    ```bash
    npm install
    ```

3.  Start the backend server:
    ```bash
    npm run dev
    ```
    The server will start on `http://localhost:5000`.
    
    > **Note:** The application connects to a local MongoDB instance at `mongodb://127.0.0.1:27017/events`. Ensure your MongoDB service is running.

### 2. Frontend Setup

The frontend is a React application powered by Vite.

1.  Open a new terminal and navigate to the root directory (if you are in `backend`, go back one level):
    ```bash
    cd ..
    ```
    (Or just open the root folder `eventplanner`)

2.  Install frontend dependencies:
    ```bash
    npm install
    ```

3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The application will be available at the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

- **backend/**: Contains the Node.js/Express server, models, and routes.
- **src/**: Contains the React frontend code.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express, MongoDB, Mongoose
