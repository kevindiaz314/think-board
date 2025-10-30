import express from "express";
import NotesRoutes from "./routes/notes-routes.js";
import connectDB from "./config/db.js";
import dotenvx from "@dotenvx/dotenvx";
import { RateLimit } from "./middleware/rate-limiter.js";

const app = express();
const PORT = process.env.PORT || 5001;

dotenvx.config();

// Middleware to parse JSON bodies
app.use(express.json());

// Rate limit middleware
app.use(RateLimit);

// Routes
app.use("/api/notes", NotesRoutes);

// Start the server only if the database is connected
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
