/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <h3>this is home</h3>
        </div>
    );
};

export default Home;