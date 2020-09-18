const Pet = require("../models/PetModel");
module.exports = {
  createOnePet: async (req, res) => {
    try {
      const pet = await Pet.create(req.body);
      res.json(pet);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  deleteOnePet: async (req, res) => {
    try {
      const pet = await Pet.findByIdAndRemove(req.params.id);
      res.json(pet);
    } catch (error) {
      res.json(error);
    }
  },
  updateOnePet: async (req, res) => {
    try {
      const { skills, ...bodyRest } = req.body;
      const pet = await Pet.findByIdAndUpdate(
        req.params.id,
        { $set: bodyRest, $addToSet: { skills: { $each: skills } } },
        { new: true }
      );
      if (!pet) {
        return res.json({});
      }
      res.json(pet);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  likeOnePet: async (req, res) => {
    try {
      const pet = await Pet.findByIdAndUpdate(
        req.params.id,
        {
          $inc: { likes: 1 },
        },
        { new: true }
      );
      if (!pet) {
        return res.json({});
      }
      res.json(pet);
    } catch (error) {
      res.json(error);
    }
  },
  getAllPets: async (req, res) => {
    try {
      const pets = await Pet.find();
      res.json({ pets });
    } catch (error) {
      res.json(error);
    }
  },
  getOnePet: async (req, res) => {
    try {
      const pet = await Pet.findById(req.params.id);
      if (!pet) {
        return res.json({});
      }
      res.json(pet);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
