import express from "express";
import db from "./db/connection.js";
import routes from "./routes/index.js";
import cors from "cors";
import logger from "morgan";
import multer from "multer";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// route handlers
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image uploaded successfully");
});

app.use("/", routes);

db.on("connected", () => {
  console.clear();
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(`Express server running in development on: ${PORT}`);
  });
});
