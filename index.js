const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

// Echo endpoint - returns whatever you send
app.post("/echo", (req, res) => {
  res.json({ received: req.body });
});

// Random number endpoint
app.get("/random", (req, res) => {
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  res.json({ number: randomNum, min, max });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
