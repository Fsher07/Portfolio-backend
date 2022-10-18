const router = require('express').Router();
const ProjectController = require('../controllers/Project');

//CREATE NEW PROJECT

router.post('/project', ProjectController.create);

//GET EXISTING PROJECTS

router.get('/projects', ProjectController.getAll);

//UPDATE A PROJECT

router.put('/projects/:id', ProjectController.update, (req, res) => {
  res.json(res.project);
});

module.exports = router;
