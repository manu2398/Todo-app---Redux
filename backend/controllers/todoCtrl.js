const Todos = require("../models/todo");

const todoCtrl = {
  createTodo: async (req, res, next) => {
    const { title, isDone } = req.body;

    const newTodo = await Todos.create({
      title,
      isDone,
    });

    res.json({ ...newTodo._doc });
  },

  getTodos: async (req, res, next) => {
    let query = Todos.find();

    const page = req.query.page * 1 || 1;
    const pageSize = req.query.limit * 1 || 5;
    const skip = (page - 1) * pageSize;
    const total = await Todos.countDocuments();

    const pages = Math.ceil(total / pageSize);

    query = query.skip(skip).limit(pageSize).sort("-createdAt");

    const todos = await query;

    res.json({ todos, results: todos.length, page, pages });
  },

  updateTodo: async (req, res, next) => {
    const { title, isDone } = req.body;
    const updatedTodo = await Todos.findByIdAndUpdate(
      { _id: req.params.id },
      { title, isDone },
      { new: true }
    );
    res.json(updatedTodo);
  },

  deleteTodo: async (req, res, next) => {
    const deletedTodo = await Todos.findByIdAndDelete({ _id: req.params.id });
    res.json(deletedTodo);
  },
};

module.exports = todoCtrl;
