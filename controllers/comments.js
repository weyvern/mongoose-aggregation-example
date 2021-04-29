import { Location, Comment } from '../models/Schemas.js';

export const getAll = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { id: location_id } = req.params;
    const { text, rating } = req.body;
    const newComment = await Comment.create({ location_id, text, rating });
    await Location.findOneAndUpdate({ _id: location_id }, { $push: { comments_list: newComment._id } });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
