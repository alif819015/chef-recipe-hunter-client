/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Food from "./Food";
import useTitle from "./shared/useTitle";

const Recipes = () => {
  useTitle('recipes');
  const [chefData, setChefData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://chef-recipe-hunter-server-alif819015.vercel.app/chef/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, [id]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="mx-5 my-5 md:mx-10 md:my-10 w-full md:w-1/2">
        <div>
          <figure>
            <img src={chefData?.picture} alt="chef" className="w-full h-full object-cover rounded-md" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{chefData?.name}</h2>
            <p>
              <span className="font-bold">Bio:</span> {chefData?.bio}
            </p>
            <p>
              <span className="font-bold">Description:</span>{" "}
              {chefData?.description}
            </p>
            <p className="flex items-center">
              <span className="font-bold mr-2">
                <HandThumbUpIcon className="h-6 w-6 text-blue-500" />
              </span>
              {chefData?.likes}
            </p>
            <p>
              <span className="font-bold">Recipes: </span>
              {chefData?.numbersOf_recipes}
            </p>
            <p>
              <span className="font-bold">Experience:</span>{" "}
              {chefData?.yearsOfExperience}
            </p>
          </div>
        </div>
      </div>

      {/* ingredients */}
      <Food key={chefData.id} chefData={chefData}  className="w-full md:w-1/2" />
    </div>
  );
};

export default Recipes;
