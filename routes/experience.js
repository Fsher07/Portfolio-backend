const router = require('express').Router();
const ExperienceController = require('../controllers/Experience');

//CREATE NEW EXPERIENCE

router.post('/experience', ExperienceController.create);

//GET EXISTING EXPERIENCES

router.get('/experiences', ExperienceController.getAll);

//GET SKILLS OF AN EXPERIENCE

router.get('/experiences/:title/skills', ExperienceController.getSkills);

module.exports = router;
