import React from "react";
import api from "../api";
import "./table.css"
export default function CategoryList({ categories, fetchCategories, setEditingCategory }) {
  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      await api.delete(`/categories/${id}`);
      fetchCategories();
    }
  };

  return (
    <div className="tableContainer">
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                <td>
                  <button className="editButton" onClick={() => setEditingCategory(cat)}>Edit</button>
                  <button className="deleteButton" onClick={() => deleteCategory(cat.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="noCategoriesMessage">
                No categories available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
