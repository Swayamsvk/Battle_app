const router = require("express").Router();
let Main = require("../models/Main");

//get list of places
router.route("/list").get((req, res) => {
  Main.find({}, { location: 1 })
    .then((main) => res.json(main))
    .catch((err) => res.status(400).json("Error:" + err));
});

//get total number of battles

router.route("/count").get((req, res) => {
  Main.count()
    .then((main) => res.json(main))
    .catch((err) => res.status(400).json("Error:" + err));
});
//search for attacker or defender

router.route("/search").get((req, res) => {
  const searchField = req.query.king;
  const searchField2 = req.query.location;
  const searchField3 = req.query.type;
  Main.find({
    $or: [
      { attacker_king: { $regex: searchField, $options: "$i" } },
      { defender_king: { $regex: searchField, $options: "$i" } },
    ],
  })
    .then((main) => {
      res.json(main);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

//search with details of attacker or defender

router.route("/searchdetail").get((req, res) => {
  const searchField = req.query.king;
  const searchField2 = req.query.location;
  const searchField3 = req.query.type;
  Main.find({
    $or: [
      { attacker_king: { $regex: searchField, $options: "$i" } },
      { defender_king: { $regex: searchField, $options: "$i" } },
    ],
    location: { $regex: searchField2, $options: "$i" },
    battle_type: { $regex: searchField3, $options: "$i" },
  })
    .then((main) => {
      res.json(main);
    })
    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
