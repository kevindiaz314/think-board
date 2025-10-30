import Note from "../models/Note.js";

export const getAllNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ message: "Notes fetched successfully", notes });
  } catch (error) {
    console.log("Error getting all notes", error);
    res
      .status(500)
      .json({ message: "Error getting all notes", error: error.message });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note found", note });
  } catch (error) {
    console.log("Error getting note by id", error);
    res
      .status(500)
      .json({ message: "Error getting note by id", error: error.message });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = await Note.create({ title, content });
    res.status(201).json({ message: "Note created successfully", note });
  } catch (error) {
    console.log("Error creating note", error);
    res
      .status(500)
      .json({ message: "Error creating note", error: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res
      .status(200)
      .json({ message: "Note updated successfully", note: updatedNote });
  } catch (error) {
    console.log("Error updating note", error);
    res
      .status(500)
      .json({ message: "Error updating note", error: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res
      .status(200)
      .json({ message: "Note deleted successfully", note: deletedNote });
  } catch (error) {
    console.log("Error deleting note", error);
    res
      .status(500)
      .json({ message: "Error deleting note", error: error.message });
  }
};
