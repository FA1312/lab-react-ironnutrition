import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood.jsx';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchedTerm] = useState('');
  const [checkoutData, setCheckout] = useState([]);

  function handleClick(food, quantity) {
    let checkoutBook = {
      name: food.name,
      quantity: quantity,
      calories: food.calories,
    };
    setCheckout([checkoutBook, ...checkoutData]);
  }

  return (
    <>
      <div>
        <input
          placeholder="Enter Food to search"
          onChange={(event) => setSearchedTerm(event.target.value)}
        />
        {foods
          .filter((food) => {
            if (searchTerm === '') {
              return food;
            } else if (
              food.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return (
                <p>
                  <FoodBox
                    name={food.name}
                    calories={food.calories}
                    image={food.image}
                  />
                </p>
              );
            }
          })
          .map((food, index) => (
            <div className="box" key={index}>
              <p>
                <FoodBox
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                />
              </p>
            </div>
          ))}
      </div>
      <AddFood />
    </>
  );
}

export default App;
