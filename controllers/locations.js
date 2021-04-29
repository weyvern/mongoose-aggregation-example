import { Location } from '../models/Schemas.js';

export const getAll = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const { name } = req.body;
    const newLocation = await Location.create({ name });
    res.status(201).json(newLocation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getSingle = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    res.status(200).json(location);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
