import { useState, useEffect } from "react";
import fetchEventsByCategories from "../../services/api";

const useFetchEvents = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const updateCategoryData = (category) => {
    fetchEventsByCategories(category).then((data) => setCategoryData(data));
  };

  useEffect(() => {
    updateCategoryData(selectedCategory);
  }, [selectedCategory]);

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  return { categoryData, handleTabChange };
};

export default useFetchEvents;
