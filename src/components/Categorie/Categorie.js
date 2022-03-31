import React from 'react';

const Categorie = ({ food }) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = food;
    return (
        <div className="mx-auto flex flex-col items-center text-gray-900 hover:text-white bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={strCategoryThumb} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{strCategory}</h5>
                { <p className="mb-3 font-normaldark:text-gray-400">{strCategoryDescription.slice(0,110)}</p> }
            </div>
        </div>
    );
};

export default Categorie;