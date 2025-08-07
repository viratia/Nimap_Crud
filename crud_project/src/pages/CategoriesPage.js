import React, { useEffect, useState } from "react";
import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";
import api from "../api";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  const fetchCategories = async () => {
    const res = await api.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

 return (
  <div className="pageContainer">
    <div className="mainContent">
      <div className="cardContainer">
        <CategoryForm
          fetchCategories={fetchCategories}
          editingCategory={editingCategory}
          setEditingCategory={setEditingCategory}
        />
      </div>

      <div className="cardContainer">
        <CategoryList
          categories={categories}
          fetchCategories={fetchCategories}
          setEditingCategory={setEditingCategory}
        />
      </div>
    </div>
  </div>
);

}
