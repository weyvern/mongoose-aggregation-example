import { Comment } from '../models/Schemas.js';

export const getAll = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(201).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
