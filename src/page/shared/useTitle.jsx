/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

const useTitle = title => {
    useEffect(()=>{
        document.title = `${title} - KitchenQuest`;
    },[title])
    return (
        <div>
            
        </div>
    );
};

export default useTitle;