const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

// Task 1 & 2: Message Endpoint
app.get("/api/message", (req, res) => {
  res.json({
    message: "My first API works!",
    course: "Browser Programming",
    year: 2026
  });
});

// Task 3: Student Endpoint
app.get("/api/student", (req, res) => {
  res.json({
    name: "ahad",
    role: "student" 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
