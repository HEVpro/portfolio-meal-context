import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/modalContext';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '70%',
    top: '10%',
    left: '10%',
    overflow: 'scroll',
    height: '100%',
    display: 'block',
    backgroundColor: theme.palette.background.paper,
    padding: '10px',
  },
}));

const Meal = ({ meal }) => {
  const { setMealId, mealInfo, setMealInfo } = useContext(ModalContext);

  console.log(mealInfo);

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const showIngredients = (info) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (info[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {info[`strIngredient${i}`]} : {info[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h3
          className="card-header"
          style={{ heigth: '3rem', fontSize: '18px' }}
        >
          {meal.strMeal}
        </h3>
        <img
          className="card-img-top"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-dark"
            onClick={() => {
              setMealId(meal.idMeal);
              handleOpen();
            }}
          >
            View Meal
          </button>
          <Modal
            open={open}
            onClose={() => {
              setMealId(null);
              setMealInfo({});
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{mealInfo.strMeal}</h2>
              <h3 className="mt-4">Instructions:</h3>
              <p>{mealInfo.strInstructions}</p>
              <img
                src={mealInfo.strMealThumb}
                className="img-fluid my-4"
                alt={mealInfo.strMeal}
              />
              <h3>Ingrdients: </h3>
              <ul>{showIngredients(mealInfo)}</ul>
              <button className="btn btn-block btn-dark" onClick={handleClose}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Meal;
