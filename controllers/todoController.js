const todoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await todoModel.find();
    res.send(toDo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.saveToDo = async (req, res) => {
  const { text, completed } = req.body; // Accept completed as part of the request
  try {
    const newToDo = new todoModel({ text, completed });
    await newToDo.save();
    console.log("Added Successfully");
    res.send(newToDo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text, completed } = req.body; // Accept completed as part of the update
  try {
    const updatedToDo = await todoModel.findByIdAndUpdate(
      _id,
      { text, completed },
      { new: true } // Return the updated document
    );
    console.log("Updated Successfully", updatedToDo);
    res.send(updatedToDo);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.params;
  try {
    await todoModel.findByIdAndDelete(id);
    console.log("Deleted Successfully", id);
    res.send("Deleted Successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
