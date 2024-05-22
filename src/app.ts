import express from "express";
import cors from "cors";
import morgan from "morgan";
import { createUser, getUserById, getUsers } from "./controllers";
// import { userRegistration } from "./controllers";

const app = express();

app.use([express.json(), cors(), morgan("dev")]);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
app.route("/users/:id").get(getUserById)
app.route("/users").get(getUsers).post(createUser);

// 404 Error
app.use((req, res, next) => {
  res.status(404).json({ code: 404, message: " Resource Not Found" });
});
// Error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ code: 500, message: "Internal Server Error" });
});

export default app;
