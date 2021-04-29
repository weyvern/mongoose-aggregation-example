import { Location } from '../models/Schemas.js';

export const getAll = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(201).json(locations);
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

export const getSingle = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
