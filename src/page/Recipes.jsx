/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HandThumbUpIcon } from '@heroicons/react/24/solid'
import Food from "./Food";

const Recipes = () => {
  const [chefData, setChefData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, [id]);
  return (
    <div className="flex">
      <div className="mx-10 my-5 card w-6/12">
      <div>
        <figure>
          <img
            src={chefData?.picture}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{chefData?.name}</h2>
          <p><span className="font-bold">Bio:</span> {chefData?.bio}</p>
          <p><span className="font-bold">Description:</span> {chefData?.description}</p>
          <p className=""><span className="font-bold mr-2"><HandThumbUpIcon className="h-6 w-6 text-blue-500" /></span>{chefData?.likes}</p>
          <p><span className="font-bold">Recipes: </span>{chefData?.numbersOf_recipes}</p>
          <p><span className="font-bold">Experience:</span> {chefData?.yearsOfExperience}</p>
        </div>
      </div>
      </div>

      {/* ingredients */}
      <Food key={chefData.id} chefData={chefData}></Food>
    </div>
  );
};

export default Recipes;
