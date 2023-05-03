/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Food = (chefData) => {
    const [rating, setRating] = useState(0)
  const food = chefData.chefData;
  console.log(food);
  return (
    <div className="mx-auto my-5">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={food?.recipeimg1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {food?.all_recipes?.name}
              <div className="badge badge-secondary">Chinese Food</div>
            </h2>

            <p>
              <span className="font-bold">CookingMethod:</span> Name:{" "}
              {food?.cookingMethod}
            </p>

            <div className="flex">
            <Rating style={{ maxWidth: 100 }} value={Math.round(food?.rating || 0)} readOnly/>
            <p className="ms-3">{food?.rating}</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Favorite</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
