# Distance Calculator Server

## Description
This is the backend component of the Distance Query Web Application. It handles geocoding of addresses, calculating distances, and storing historical queries.

## Features
- Calculate Distance: Computes the distance between two addresses using the Nominatim API.
- Error Handling: Returns an error message if the distance calculation fails.
- Historical Queries: Stores and provides access to all historical queries.

## Technologies Used
- Node.js
- Express
- SQLite3
- Nominatim API

## Setup Instructions
### Prerequisites
- Node.js
- npm

### Step 1: Install Dependencies
```bash
cd server
npm install
```

### Step 2: Run the Server
```bash
node src/index.js
```

## API Endpoints

- GET `/api/history`: Retrieves all historical queries.
- POST `/api/distance`: Calculates distance between two addresses.

## Environment Variables
NODE_ENV: Set to production for production environment.
