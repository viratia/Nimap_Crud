import React from "react";
import api from "../api";
import "./table.css"
export default function ProductList({ products, fetchProducts, setEditingProduct }) {
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await api.delete(`/products/${id}`);
      fetchProducts();
    }
  };

  return (
    <div className="tableContainer">
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {products.length > 0 ? (
            products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.description}</td>
                <td>{prod.price}</td>
                <td>{prod.categoryName}</td>
                <td>
                  <button
                    className="editButton"
                    onClick={() => setEditingProduct(prod)}
                  >
                    Edit
                  </button>
                  <button
                    className="deleteButton"
                    onClick={() => deleteProduct(prod.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="noCategoriesMessage">
                No products available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
