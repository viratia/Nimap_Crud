const Category = require("../models/categoryModel");

exports.getCategories = (req, res) => {
  Category.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.addCategory = (req, res) => {
  Category.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category added successfully" });
  });
};

exports.updateCategory = (req, res) => {
  Category.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category updated successfully" });
  });
};

exports.deleteCategory = (req, res) => {
  Category.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Category deleted successfully" });
  });
};
