# Distance Query Web Application

## Description
This is a simple web application that allows users to query the distance in kilometers between two addresses. The application features a frontend interface for entering source and destination addresses, calculates the distance using the Nominatim API, and stores the historical queries. Users can also view the history of their queries.

## Features
- Query Distance: Users can enter a source and destination address and receive the distance in kilometers.
- Error Handling: If the distance calculation fails, the application displays an error message.
- Historical Queries: The application stores all historical queries, including the source address, destination address, and distance.
- View History: Users can view a list of all historical queries.

## Technologies Used
- Frontend: Vite, React, Styled Components
- Backend: Node.js, Express, SQLite3
- API: Nominatim API
- Containerization: Docker, Docker Compose

## Folder Structure

```bash
/server
    src/index.js
    package.json
    Dockerfile
/client
    vite.config.js
    src/
        App.jsx
        components/
            DistanceCalculator/
            History/
    package.json
    Dockerfile
README.md
docker-compose.yml
```

## Setup Instructions

### Prerequisites
- Docker
- Docker Compose

Step 1: Clone the Repository

```bash
git clone git@github.com:rodrigo-tavares/distance-calculator.git
cd distance-calculator
```

Step 2: Build and Run the Containers
```bash
docker-compose up --build
```

Step 3: Access the Application

Frontend: Open your browser and navigate to http://localhost:3000
Backend: The server runs on http://localhost:3001

## API Reference
- Nominatim API: Used for geocoding addresses to latitude and longitude.
- Documentation: Nominatim API

## License
This project is licensed under the MIT License