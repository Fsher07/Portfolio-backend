const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    position: {
      type: String,
    },
    period: { type: String },
    summaries: { type: Array },
    skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Experience', ExperienceSchema);
