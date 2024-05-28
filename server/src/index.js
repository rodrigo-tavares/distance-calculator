const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;
const DATABASE = "db.sqlite";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(
  cors({
    origin: "https://fascinating-centaur-1a5f08.netlify.app/",
  })
);

let db = new sqlite3.Database(DATABASE);

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS queries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source_address TEXT,
        destination_address TEXT,
        distance REAL
    )`);
});

const geocodeAddress = async (address) => {
  const url = `https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
    address
  )}&format=json&limit=1`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.length > 0) {
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  }
  return null;
};

const calculateDistance = (coord1, coord2) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const R = 6371; // Radius of the Earth in km
  const lat1 = toRadians(coord1.lat);
  const lon1 = toRadians(coord1.lon);
  const lat2 = toRadians(coord2.lat);
  const lon2 = toRadians(coord2.lon);

  const deltaLat = lat2 - lat1;
  const deltaLon = lon2 - lon1;

  const a =
    Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c;
  return distance;
};

app.post("/calculate", async (req, res) => {
  const { source, destination } = req.body;

  const sourceCoords = await geocodeAddress(source);
  const destinationCoords = await geocodeAddress(destination);

  if (sourceCoords && destinationCoords) {
    const distance = calculateDistance(sourceCoords, destinationCoords);

    db.run(
      `INSERT INTO queries (source_address, destination_address, distance) VALUES (?, ?, ?)`,
      [source, destination, distance]
    );

    res.json({ success: true, distance });
  } else {
    res.json({
      success: false,
      message:
        "Could not calculate distance. Please check the addresses and try again.",
    });
  }
});

app.get("/history", (req, res) => {
  db.all("SELECT * FROM queries", [], (err, rows) => {
    if (err) {
      res.json({ success: false, message: "Could not retrieve history." });
    } else {
      res.json({ success: true, queries: rows });
    }
  });
});

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
