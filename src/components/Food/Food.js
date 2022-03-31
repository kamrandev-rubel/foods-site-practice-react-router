import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid'

const Food = ({ food }) => {
    const { strMeal, strMealThumb } = food;
    const navigate = useNavigate()
    const foodDetailsHandler = () => {
        navigate(`/food/${food.idMeal}`)
    }
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-900">
                <img className="rounded-t-lg" src={strMealThumb} alt=""/>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
                <button onClick={foodDetailsHandler} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                    Food Details
                    <ArrowRightIcon className='ml-2 -mr-1 w-4 h-4'/>
                </button>
            </div>
        </div>
    );
};

export default Food;