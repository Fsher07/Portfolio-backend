const ExperienceModel = require('../models/Experience');

const ExperienceController = {
  create: async (req, res) => {
    const newExperience = new ExperienceModel({
      title: req.body.title,
      logo: req.body.logo,
      position: req.body.position,
      period: req.body.period,
      summaries: req.body.summaries,
      skills: req.body.skills,
    });
    try {
      const savedExperience = await newExperience.save();
      res.json(savedExperience);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  getAll: async (req, res) => {
    const experience = await ExperienceModel.find({}).populate('skills');
    res.json(experience);
  },
  getSkills: async (req, res) => {
    const foundExperience = await ExperienceModel.find({
      title: req.params.title,
    }).populate('skills');
    res.json(foundExperience);
  },
};

module.exports = ExperienceController;
