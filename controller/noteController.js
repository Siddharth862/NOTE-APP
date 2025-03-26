const noteSchema = require("../model/noteSchema");

exports.insertNote = async (req, res) => {
  let payload = await noteSchema.create(req.body);
  res.status(200).json({
    success: true,
    message: "Data is inserted",
    payload,
  });
};
//!----fetching all the data from database

exports.fetchData = async (req, res) => {
  let payload = await noteSchema.find({});
  res.status(200).json({
    success: true,
    message: "Data is inserted",
    payload,
  });
};

//!--fetching single data

exports.fetchsingleData = async (req, res) => {
  let payload = await noteSchema.findById(req.params.id);
  res.status(200).json({
    success: true,
    message: "Data is Displayed",
    payload,
  });
};

//!--deleteing data

exports.deleteData = async (req, res) => {
  let payload = await noteSchema.deleteOne(req.params.id);
  res.status(200).json({
    success: true,
    message: "Data is deleted",
    payload,
  });
};

//!--updating the data

exports.noteUpdate = async (req, res) => {
  let payload = await noteSchema.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.status(200).json({
    success: true,
    message: "Data is updated",
    payload,
  });
};
