import { Router } from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controller/notes-controller.js";

const notesRoutes = Router();

notesRoutes.get("/", getAllNotes);
notesRoutes.get("/:id", getNoteById);
notesRoutes.post("/", createNote);
notesRoutes.put("/:id", updateNote);
notesRoutes.delete("/:id", deleteNote);

export default notesRoutes;
