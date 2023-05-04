/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import '@smastrom/react-rating/style.css';
import 'react-toastify/dist/ReactToastify.css';
import SingleCard from './SingleCard';


const Food = ({chefData}) => {
    console.log(chefData?.all_recipes)
  return (
    <div className="mx-auto my-5">
    
      {
        chefData?.all_recipes?.map(p=> <SingleCard chefData={chefData} p={p}></SingleCard>)
     
      }
    </div>
  );
};

export default Food;
