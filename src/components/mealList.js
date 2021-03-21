import React, { useContext } from 'react';
import { MealContext } from '../context/mealContext';
import Meal from './meal';

const MealList = () => {
  const { meals } = useContext(MealContext);

  return (
    <div className="row mt-5">
      {meals ? (
        meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)
      ) : (
        <h1 style={{ color: 'black' }}>There are not Meals</h1>
      )}
    </div>
  );
};

export default MealList;
