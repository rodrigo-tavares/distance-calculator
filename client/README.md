# Distance Calculator Client

## Description
This is the frontend component of the Distance Query Web Application. It allows users to enter source and destination addresses and displays the distance in kilometers. It also provides a view for historical queries.

## Features
- Query Distance: Enter a source and destination address to calculate the distance.
- Error Handling: Displays an error message if the distance calculation fails.
- Historical Queries: View a list of all historical queries.

## Technologies Used
- Vite
- React
- Styled Components

## Setup Instructions

### Prerequisites
- Node.js
- npm

### Step 1: Install Dependencies

```bash
cd client
yarn install
```

### Step 2: Run the Development Server

```bash
yarn dev
```

### Step 3: Build for Production

```bash
npm run build
```

## Docker Instructions

Build and run the client container:

```bash
docker build -f Dockerfile.client -t client-image .
docker run -p 3000:80 client-image
```