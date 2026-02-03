const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// ================= GET TASKS =================
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

// ================= ADD TASK =================
router.post("/", async (req, res) => {
  try {
    const { text, dueDate, priority } = req.body;

    if (!text) {
      return res.status(400).json({ message: "Task text required" });
    }

    const todo = new Todo({
      text,
      dueDate,
      priority: priority || "Medium",
      completed: false
    });

    await todo.save();
    res.status(201).json(todo);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to add task" });
  }
});

// ================= TOGGLE =================
router.put("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Not found" });

    todo.completed = !todo.completed;
    await todo.save();
    res.json(todo);

  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// ================= DELETE =================
router.delete("/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
});

module.exports = router;
