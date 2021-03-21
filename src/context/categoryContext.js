import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Create the context
export const CategoryContext = createContext();

//Create the provider: the source of the functions and props to the sons
const CategoryProvider = (props) => {
  //State of the context
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
      const response = await axios.get(url);
      setCategories(response.data.meals);
    };
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {props.children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;
