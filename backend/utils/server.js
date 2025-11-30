import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const SECRET_KEY = "6Lf2YxwsAAAAAJqtVvnA36yrx3AYq-rSScG2aM7D"; // your secret key

app.post("/verify-captcha", async (req, res) => {
  const token = req.body.token;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`;

  const result = await fetch(url, { method: "POST" }).then((r) => r.json());

  res.json(result);
});

app.listen(5000, () => console.log("Server running on port 5000"));
