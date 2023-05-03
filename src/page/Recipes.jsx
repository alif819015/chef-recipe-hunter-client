/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipes = () => {
  const [chefData, setChefData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, [id]);
  console.log(chefData);
  return (
    <div>
      <div className="mx-5 my-5 card w-6/12 glass">
        <figure>
          <img
            src={chefData?.picture}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefData?.name}</h2>
          <p><span className="font-bold">Bio:</span> {chefData?.bio}</p>
          <p><span className="font-bold">description:</span> {chefData?.description}</p>
          <p><span className="font-bold">likes:</span>{chefData?.likes}</p>
          <p><span className="font-bold">numbersOf_recipes:</span>{chefData?.numbersOf_recipes}</p>
          {/* <p>{chefData?.likes}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
