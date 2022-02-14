import React, { useState } from 'react';

function AddFood() {
  const [food, setFood] = useState({
    name: '',
    calories: '',
    image: '',
    quantity: 0,
  });

  const [listFood, setListFood] = useState([]);

  const getNewFood = (e) => {
    return setFood({
      ...food,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFood = (e) => {
    e.preventDefault();

    setListFood([...listFood, food]);

    setFood({
      name: '',
      calories: '',
      image: '',
      quantity: 0,
    });
  };

  return (
    <>
      {listFood.map((element) => {
        return (
          <div>
            <div className="box">
              <article className="media">
                <div className="media-left">
                  <figure className="image is-64x64">
                    <img src={element.image} alt={element.name} />
                  </figure>
                </div>
                <div className="media-content">
                  <div className="content">
                    <p>
                      <strong>{element.name}</strong> <br />
                      <small>{element.calories}</small>
                    </p>
                  </div>
                </div>
                <div className="media-right">
                  <div className="field has-addons">
                    <div className="control">
                      <input className="input" type="number" value="1" />
                    </div>
                    <div className="control">
                      <button className="button is-info">+</button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <button>+</button>
          </div>
        );
      })}

      <form
        onSubmit={(e) => {
          addNewFood(e);
        }}
      >
        <label>Name: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="name"
          value={food.name}
        />{' '}
        <br />
        <label>Calories: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="calories"
          value={food.calories}
        />{' '}
        <br />
        <label>Image: </label>
        <input
          onChange={(e) => {
            getNewFood(e);
          }}
          name="image"
          value={food.image}
        />{' '}
        <br />
        <button>Create</button>
      </form>
    </>
  );
}

export default AddFood;
