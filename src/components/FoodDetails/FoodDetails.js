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
        <div>
            <div class="mx-auto mt-10 flex flex-col items-center bg-indigo-600 text-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-300 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full h-4/5 rounded-t-lg md:h-auto md:w-96 md:rounded-none md:rounded-l-lg" src={food[0]?.strMealThumb} alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal   ">
                    <h5 class="mb-2 text-2xl font-bold tracking-tighttext-white dark:text-white"> {food[0]?.strMeal}</h5>
                    <p class="mb-3 font-normal  dark:text-gray-400">{food[0]?.strInstructions }</p>
                    </div>
            </div>
        </div>
    );
};

export default FoodDetails;



{/* 

<a href="#" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
        <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
</a> */}