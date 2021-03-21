import React, { useContext, useState } from 'react';
import { CategoryContext } from '../context/categoryContext';
import { MealContext } from '../context/mealContext';

const Form = () => {
  const [userSearch, setUserSearch] = useState({
    name: '',
    category: '',
  });
  const { categories } = useContext(CategoryContext);
  const { setSearch, setQuery } = useContext(MealContext);

  const getMealData = (e) => {
    setUserSearch({
      ...userSearch,
      [e.target.name]: e.target.value,
    });
  };
  const getSearch = (e) => {
    e.preventDefault();
    setSearch(userSearch);
    setQuery(true);
  };
  return (
    <form className="col-12" onSubmit={getSearch}>
      <fieldset className="text-center">
        <legend>Search meals by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Search by ingredient"
            onChange={getMealData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={getMealData}
          >
            <option value="">--Select category--</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-dark"
            value="Search meals"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
