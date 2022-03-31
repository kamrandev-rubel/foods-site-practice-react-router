import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const { foodId } = useParams()
    const [food, setFood] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
            .then(res => res.json())
            .then(data => setFood(data.meals))
    }, [])
    return (
        <div className=' min-h-[100vh]'>
            <div className="mx-auto mt-10 flex flex-col items-center bg-white text-gray-900 rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-200 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-4/5 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={food[0]?.strMealThumb} alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tighttext-white dark:text-white"> {food[0]?.strMeal}</h5>
                    <p className="mb-3 font-normal  dark:text-gray-400">{food[0]?.strInstructions }</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;