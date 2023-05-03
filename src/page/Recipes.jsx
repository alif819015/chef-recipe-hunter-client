/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Recipes = () => {
    const [chefData, setChefData] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/chef`)
        .then(res=>res.json())
        .then(data=>setChefData(data))
    },[])
    console.log(chefData);
    return (
        <div>
            <h3>all recipe : {id}</h3>
            {
                chefData?.find((chef)=> (
                    <div key={chef.id}>
                        <h3>Name:{chef.name}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Recipes;