// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Restaurant = () => {
    const [inputValue, setInputValue] = useState('')
    const [foods, setFoods] = useState([])
    const searchBox = e => {
        setInputValue(e.target.value)
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => {
                if (data.meals === null) {
                    
                } else {
                    setFoods(data.meals)
                }
            })
    }, [inputValue])
    
    
    return (
        <div className='text-center'>
            <h2 className='text-5xl font-bold text-indigo-500 mt-10 mb-5'>Find the food you want</h2>
            <input onChange={searchBox} type="text" placeholder='Search Foods' className='w-6/12 h-10 p-3 py-5 focus:text-2xl outline-none border-4 border-indigo-500 rounded-lg mb-4' />
            
            <dir className='grid gap-4 grid-cols-3'>
                {
                    foods.map(food => <Food key={food.idMeal} food={food} />)
                }
            </dir>
        </div>
    );
};

export default Restaurant;