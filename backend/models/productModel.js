const db = require("../config/db");

const Product = {
  getAll: (callback) => {
    db.query(`SELECT products.*, categories.name AS categoryName 
              FROM products 
              LEFT JOIN categories ON products.category_id = categories.id`, callback);
  },
  create: (data, callback) => {
    db.query("INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)",
      [data.name, data.description, data.price, data.category_id], callback);
  },
  update: (id, data, callback) => {
    db.query("UPDATE products SET name=?, description=?, price=?, category_id=? WHERE id=?",
      [data.name, data.description, data.price, data.category_id, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM products WHERE id=?", [id], callback);
  }
};

module.exports = Product;
