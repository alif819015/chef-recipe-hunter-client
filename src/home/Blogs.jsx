/* eslint-disable no-unused-vars */
import React from 'react';

const Blogs = () => {
    return (
        <div className=' bg bg-orange-100 text-black'>
            <div className='px-10 py-10'>
                <h2 className='font-bold text-2xl'> Differences Between Controlled and Uncontrolled Components.</h2>
                <p className='font-bold text-xl'>Answer:</p>
                <p className='font-bold'>Controlled Components:</p>
                <ol>
                    <li>Data Flow: Data is managed by React component state.</li>
                    <li>Value Initialization: Requires initial value to be set in state.</li>
                    <li>Value Update: Value updates are handled by the component state.</li>
                    <li>Validation: You can validate the input data before updating the state.</li>
                    <li>Performance: Can have performance issues with large forms.</li>
                    <li>Usage: Best for complex forms where you need more control over the data.</li>
                    <br />

                    <p className='font-bold'>Uncontrolled Components:</p>
                    <li>Data Flow: Data is managed by the DOM.</li>
                    <li>Value Initialization: Initial value is set in the HTML markup.</li>
                    <li>Value Update: Value updates are handled by the DOM.</li>
                    <li>Validation: No built-in validation support.</li>
                    <li>Performance: Better performance with large forms.</li>


                </ol>
            </div>
            <div className='px-10 py-10'>
                <h2 className='font-bold text-2xl'> How to validate React props using PropTypes</h2>
                <p className='font-bold text-xl'>Answer:</p>
                <p className='font-bold'>Controlled Components:</p>
                
            </div>
            <div className='px-10 py-10'>
                <h2 className='font-bold text-2xl'> Tell us the difference between nodejs and express js.</h2>
                <p className='font-bold text-xl'>Answer:</p>
                <p className='font-bold'>Controlled Components:</p>
                
            </div>
            <div className='px-10 py-10'>
                <h2 className='font-bold text-2xl'> What is a custom hook, and why will you create a custom hook?</h2>
                <p className='font-bold text-xl'>Answer:</p>
                <p className='font-bold'>Controlled Components:</p>
                
            </div>
        </div>
    );
};

export default Blogs;