const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    percentage: { type: Number, required: true },
    sliding: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Skill', SkillSchema);
