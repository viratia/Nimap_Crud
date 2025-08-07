import React, { useState, useEffect } from "react";
import api from "../api";
import "./form.css"
export default function ProductForm({ fetchProducts, categories, editingProduct, setEditingProduct }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setDescription(editingProduct.description);
      setPrice(editingProduct.price);
      setCategoryId(editingProduct.category_id);
    }
  }, [editingProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProduct) {
      await api.put(`/products/${editingProduct.id}`, { name, description, price, category_id: categoryId });
      setEditingProduct(null);
    } else {
      await api.post("/products", { name, description, price, category_id: categoryId });
    }
    setName("");
    setDescription("");
    setPrice("");
    setCategoryId("");
    fetchProducts();
  };

  return (
    <form onSubmit={handleSubmit} className="formContainer">
      <h4 className="cardTitle">{editingProduct ? "Edit Product" : "Add New Product"}</h4>

      <div className="formGroup">
        <label className="formLabel">Product Name</label>
        <input
          type="text"
          className="formControl"
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Description</label>
        <textarea
          className="formControl textareaControl"
          placeholder="ENTER PRODUCT DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="formGroup">
        <label className="formLabel">Price</label>
        <input
          type="number"
          className="formControl"
          placeholder="Enter product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="formGroup">
        <label className="formLabel">Category</label>
        <select
          className="formControl"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
          required
        >
          <option value="">Select category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <button className="submitButton">
        {editingProduct ? "Update" : "Add"} Product
      </button>
    </form>
  );
}
