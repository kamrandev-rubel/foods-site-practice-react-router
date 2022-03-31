import React from 'react';

const Food = (props) => {
    const { strMeal,strMealThumb}= props.food
    return (
        <div className=' border-4 border-stone-400 rounded-lg p-6'>
            <img src={strMealThumb} alt=""  className=' rounded-lg'/>
            <h2 className='my-4'><span className='font-semibold text-xl'>Food Name:</span> {strMeal}</h2>
            <button className='bg-indigo-500 py-2 px-10 rounded-lg text-white font-semibold'>Food Details</button>
        </div>
    );
};

export default Food;