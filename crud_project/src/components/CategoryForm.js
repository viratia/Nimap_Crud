import React, { useState, useEffect } from "react";
import api from "../api";
import "./form.css"

export default function CategoryForm({ fetchCategories, editingCategory, setEditingCategory }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingCategory) {
      setName(editingCategory.name);
      setDescription(editingCategory.description);
    }
  }, [editingCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCategory) {
      await api.put(`/categories/${editingCategory.id}`, { name, description });
      setEditingCategory(null);
    } else {
      await api.post("/categories", { name, description });
    }
    setName("");
    setDescription("");
    fetchCategories();
  };

  return (
    
   <form onSubmit={handleSubmit} className="formContainer">
  <h4 className="cardTitle">{editingCategory ? "Edit Category" : "Add New Category"}</h4>
  <div className="formGroup">
    <label className="formLabel">Category Name</label>
    <input
      type="text"
      className="formControl"
      placeholder="Enter category name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
    />
  </div>

  <div className="formGroup">
    <label className="formLabel">Category Description</label>
    <textarea
      className="formControl textareaControl"
      placeholder="ENTER CATEGORY DESCRIPTION"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    ></textarea>
  </div>

  <button className="submitButton">
    {editingCategory ? "Update" : "Add"} Category
  </button>
</form>

  );
}
