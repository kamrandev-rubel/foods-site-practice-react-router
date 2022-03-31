import React from 'react';
import { useNavigate } from 'react-router-dom';

const Food = ({ food }) => {
    const { strMeal, strMealThumb, idMeal } = food;
    const navigate = useNavigate()
    const foodDetailsHandler = () => {
        navigate(`/food/${food.idMeal}`)
    } 
    return (
        <div className=' border-4 border-stone-400 rounded-lg p-6'>
            <img src={strMealThumb} alt="" className=' rounded-lg' />
            <h2 className='my-4'><span className='font-semibold text-xl'>Food Name:</span> {strMeal}</h2>
            <button onClick={foodDetailsHandler} className='bg-indigo-500 py-2 px-10 rounded-lg text-white font-semibold'>Food Details</button>
        </div>
    );
};

export default Food;