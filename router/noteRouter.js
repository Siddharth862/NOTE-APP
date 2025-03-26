const { Router } = require("express");
const {
  insertNote,
  fetchData,
  fetchsingleData,
  deleteData,
  noteUpdate,
} = require("../controller/noteController");

const router = Router();
router.post("/notes", insertNote);
router.get("/notes", fetchData);
router.get("/notes/:id", fetchsingleData);
router.delete("/notes/:id", deleteData);
router.post("/notes/:id", noteUpdate);
module.exports = router;
