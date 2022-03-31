import React, { useEffect, useState } from 'react';
import Categorie from '../Categorie/Categorie';

const Categories = () => {
    const [foodsCategories, setFoodsCategories] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setFoodsCategories(data.categories))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 mt-10 min-h-[100vh]'>
                {
                    foodsCategories.map(food =>
                        <Categorie
                            key={food.idCategory}
                            food={food}
                        />)
                }
            </div>
        </div>
    );
};

export default Categories;