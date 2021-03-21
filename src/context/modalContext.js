import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [mealId, setMealId] = useState(null);
  const [mealInfo, setMealInfo] = useState({});

  useEffect(() => {
    const getFullMealInfo = async () => {
      if (!mealId) return null;
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
      const response = await axios.get(url);
      setMealInfo(response.data.meals[0]);
    };
    getFullMealInfo();
  }, [mealId]);

  return (
    <ModalContext.Provider value={{ setMealId, mealInfo, setMealInfo }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
