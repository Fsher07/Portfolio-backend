const ProjectModel = require('../models/Project');

const ProjectController = {
  create: async (req, res) => {
    const newProject = new ProjectModel({
      title: req.body.title,
      img: req.body.img,
      description: req.body.description,
      link: req.body.link,
    });
    try {
      const savedProject = await newProject.save();
      res.json(savedProject);
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  },
  getAll: async (req, res) => {
    const project = await ProjectModel.find({});
    res.json(project);
  },
  update: async (req, res) => {
    try {
      const updatedProject = await ProjectModel.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProject);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ProjectController;
