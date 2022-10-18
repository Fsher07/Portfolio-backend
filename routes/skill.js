const router = require('express').Router();
const Skill = require('../models/Skill');
const SkillController = require('../controllers/Skill');

// CREATE NEW SKILL

router.post('/skill', SkillController.create);

// GET EXISTING SKILLS

router.get('/skills', SkillController.getAll);

// Update a skill
router.put('/skills/:name', SkillController.update, (req, res) => {
  res.json(res.skill);
});

module.exports = router;
