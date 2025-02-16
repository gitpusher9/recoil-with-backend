const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Enable JSON parsing

// Function to generate a random number between min and max
const getRandomCount = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

app.get("/notifications", (req, res) => {
    const notifications = {
        network: getRandomCount(0, 20),
        jobs: getRandomCount(0, 10),
        messaging: getRandomCount(0, 15),
        notifications: getRandomCount(0, 25),
        
        total: 0, // Placeholder for total count
    };

    notifications.total = notifications.network + notifications.message + notifications.notification + notifications.job;

    res.json(notifications);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
