import React from 'react';
//Components
import Header from './components/header';
import Form from './components/form';
import MealList from './components/mealList';

//Providers
import CategoryProvider from './context/categoryContext';
import MealProvider from './context/mealContext';
import ModalProvider from './context/modalContext';

function App() {
  return (
    <CategoryProvider>
      <MealProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <MealList />
          </div>
        </ModalProvider>
      </MealProvider>
    </CategoryProvider>
  );
}

export default App;
