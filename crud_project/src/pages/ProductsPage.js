import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import api from "../api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    const res = await api.get("/products");
    setProducts(res.data);
  };

  const fetchCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="container mt-4">
      <ProductForm fetchProducts={fetchProducts} categories={categories} editingProduct={editingProduct} setEditingProduct={setEditingProduct} />
      <ProductList products={products} fetchProducts={fetchProducts} setEditingProduct={setEditingProduct} />
    </div>
  );
}
