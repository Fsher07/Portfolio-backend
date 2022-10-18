const { update } = require('../models/Experience');
const SkillModel = require('../models/Skill');

const SkillController = {
  create: async (req, res) => {
    const newSkill = new SkillModel({
      name: req.body.name,
      icon: req.body.icon,
      percentage: req.body.percentage,
    });
    try {
      const savedSkill = await newSkill.save();
      res.json(savedSkill);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getAll: async (req, res) => {
    const skills = await SkillModel.find({});
    res.json(skills);
  },
  update: async (req, res) => {
    try {
      const updatedSkill = await SkillModel.findOneAndUpdate(
        { name: req.params.name },
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSkill);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = SkillController;
