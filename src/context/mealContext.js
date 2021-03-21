import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

//Create the context
export const MealContext = createContext();

//Create the provider: the source of the functions and props to the sons
const MealProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState({
    name: '',
    category: '',
  });
  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (query) {
      const getMeals = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
        const response = await axios.get(url);
        setMeals(response.data.meals);
      };
      getMeals();
    }
  }, [search]);
  return (
    <MealContext.Provider
      value={{
        meals,
        setSearch,
        setQuery,
      }}
    >
      {props.children}
    </MealContext.Provider>
  );
};

export default MealProvider;
