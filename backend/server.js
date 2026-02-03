const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

// ===============================
// LOAD ENV VARIABLES
// ===============================
dotenv.config({ path: path.resolve(__dirname, ".env") });

// ===============================
// INIT APP
// ===============================
const app = express();

// ===============================
// DEBUG CHECK (SAFE TO KEEP)
// ===============================
console.log("ENV CHECK:", process.env.MONGO_URI);

// ===============================
// CONNECT DATABASE
// ===============================
connectDB();

// ===============================
// MIDDLEWARE
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// ROUTES
// ===============================
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

// ===============================
// ROOT TEST ROUTE
// ===============================
app.get("/", (req, res) => {
  res.send("TodoPro Backend + MongoDB running 🚀");
});

// ===============================
// START SERVER (KEEP LAST)
// ===============================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
