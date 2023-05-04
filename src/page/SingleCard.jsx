/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { ToastContainer, toast } from 'react-toastify';

const SingleCard = ({p,chefData}) => {
    console.log(chefData)

    const [isFavorites, setIsFavorites] = useState(false);
    const [showToast, setShowToast] = useState(false);
  
    const handleFavoriteClick = (id) => {
      setIsFavorites(!isFavorites);
      setShowToast(true);
      toast("Favorite your item!")
    };


    return (
        <div>
             <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
              
              <div className="card-body">
                <h2 className="card-title">
                  <div className="badge badge-secondary">Chinese Food</div>
                </h2> 
                <figure>
                <img src={p?.recipeimg} alt="Shoes" />
              </figure>
                  <h3><span className="font-bold">Name of recipe: </span> {p?.name}</h3>
                  <h3><span className="font-bold">ingredients: </span> {p?.ingredients}</h3>
                <p>
                  <span className="font-bold">CookingMethod:</span>{chefData?.cookingMethod}
                </p>
    
                <div className="flex">
                <Rating style={{ maxWidth: 100 }} value={Math.round(chefData?.rating || 0)} readOnly/>
                <p className="ms-3">{chefData?.rating}</p>
                </div>
                <div className="card-actions justify-end">
                  <button disabled={isFavorites} onClick={()=>handleFavoriteClick()} className="btn btn-primary">Favorite</button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SingleCard;