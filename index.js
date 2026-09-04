const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(express.static("public"));


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

app.post("/upload", upload.single("myfile"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: "No file selected."
        });
    }
console.log(req.file.mimetype);
    const isAllowed =
    req.file.mimetype.startsWith("image/") ||
    req.file.mimetype === "application/pdf" ||
    req.file.mimetype === "application/octet-stream";

    if (!isAllowed) {
        return res.status(400).json({
            error: "Only images and PDFs are allowed!"
        });
    }

    res.json({
        success: true,
        name: req.file.originalname
    });
});

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});