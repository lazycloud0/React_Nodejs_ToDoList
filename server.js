import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const tasks = [];

app.get("/", (req, res) => {
  res.send("Welcome to the Todo List App API");
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json({ message: "Task added successfully!" });
});

app.put("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = req.body;
  tasks[id] = task;
  res.json({ message: "Task updated successfully!" });
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.json({ message: "Task deleted successfully!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
