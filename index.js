const express = require("express");

const app = express();

app.use(express.json());

// GET
app.get("/", (req, res) => {
    res.send("Node.js Server is Running");
});

// GET
app.get("/students", (req, res) => {
    res.send("Get all students");
});

// POST
app.post("/students", (req, res) => {
    res.send("Student added");
});

// PUT
app.put("/students", (req, res) => {
    res.send("Student completely updated");
});

// PATCH
app.patch("/updatestudents", (req, res) => {
    res.send("Student partially updated");
});

// DELETE
app.delete("/deletestudents", (req, res) => {
    res.send("Student deleted");
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});