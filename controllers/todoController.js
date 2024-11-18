const todoModel = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await todoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text }).then((data) => {
    console.log("Added Succesfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  // Ensure that _id is a valid ObjectId
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => {
      console.log("Updated Succesfully");
      console.log(_id, text);
      res.send("Updated Succesfully");
    })
    .catch((error) => console.log(error));
};

module.exports.deleteToDo = async (req, res) => {
  const { id } = req.params;
  todoModel
    .findByIdAndDelete(id)
    .then(() => {
      console.log("Deleted Succesfully");
      console.log(id);
      res.send("Deleted Succesfully");
    })
    .catch((error) => console.log(error));
};
