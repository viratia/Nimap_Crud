const db = require("../config/db");

const Category = {
  getAll: (callback) => {
    db.query("SELECT * FROM categories", callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO categories (name, description) VALUES (?, ?)", [data.name, data.description], callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE categories SET name=?, description=? WHERE id=?", [data.name, data.description, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM categories WHERE id=?", [id], callback);
  }
};

module.exports = Category;
