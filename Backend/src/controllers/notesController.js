import Note from "../model/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error getting notes controller", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const getnote = await Note.findById(req.params.id);
    if (!getnote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(getnote);
  } catch (error) {
    console.error("Error getting note controller", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });
    const noteSaved = await note.save();
    res.status(201).json({ noteSaved });
  } catch (error) {
    console.error("Error in creating notes controller", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const uptnote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!uptnote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(uptnote);
  } catch (error) {
    console.error("Error in updating notes controller", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const dltnote = await Note.findByIdAndDelete(req.params.id);
    if (!dltnote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note Deleted Successfully!" });
  } catch (error) {
    console.error("Error in deleting notes controller", error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });
  }
};
