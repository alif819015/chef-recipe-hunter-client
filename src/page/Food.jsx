/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Food = (chefData) => {
  const food = chefData.chefData;
  console.log(food?.all_recipes);
  return (
    <div className="mx-auto my-5">
      

      {
        food?.all_recipes?.map(p=> (
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
                  <span className="font-bold">CookingMethod:</span>{food?.cookingMethod}
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
        )
        )
      }
    </div>
  );
};

export default Food;
