const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mainSchema = new Schema(
  {
    name: { type: String, required: false },
    year: { type: String, required: false },
    battle_number: { type: String, required: false },
    attacker_king: { type: String, required: false },
    defender_king: { type: String, required: false },
    attacker_1: { type: String, required: false },
    attacker_2: { type: String, required: false },
    attacker_3: { type: String, required: false },
    attacker_4: { type: String, required: false },
    defender_1: { type: String, required: false },
    defender_2: { type: String, required: false },
    defender_3: { type: String, required: false },
    defender_4: { type: String, required: false },
    attacker_outcome: { type: String, required: false },
    battle_type: { type: String, required: false },
    major_death: { type: String, required: false },
    major_capture: { type: String, required: false },
    attacker_size: { type: String, required: false },
    defender_size: { type: String, required: false },
    attacker_commander: { type: String, required: false },
    defender_commander: { type: String, required: false },
    summer: { type: String, required: false },
    location: { type: String, required: false },
    region: { type: String, required: false },
    note: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Main = mongoose.model("Battles", mainSchema);

module.exports = Main;
