/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const Card = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-alif819015.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  //   console.log(chefData);
  return (
    <div className="flex flex-wrap">
      {chefData?.map((chef) => (
        <div key={chef?.id} className="w-full md:w-1/3 p-4">
          <div className="text-black card bg-base-100 shadow-xl">
            <figure>
              <LazyLoad
                offset={100}
                onContentVisible={() => console.log("Content visible!")}
              >
                 <img
                className="rounded-md mt-2"
                style={{ height: "300px", width: "95%" }}
                src={chef?.picture}
                alt="Lazy-loaded image"
              />
              </LazyLoad>
            </figure>
            <div className="card-body">
              <h2 className="card-title text-black">Name {chef?.name}</h2>
              <p>From: {chef.country}</p>
              <p>Experience: {chef.yearsOfExperience}</p>
              <p>Recipes: {chef.numbersOf_recipes}</p>
              <p>Likes: {chef.likes}</p>
              <p>Rating: {chef.rating}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">
                  <Link to={`/chef/${chef.id}`}>View Recipes</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
