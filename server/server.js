import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 4000;

// allow multiple origins
const allowedOrigins = ["http://localhost:5173"];

// middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Root endpoint
app.get("/", (req, res) => {
  res.send("API Successfully connected");
});

// start runing server in localhost
app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
