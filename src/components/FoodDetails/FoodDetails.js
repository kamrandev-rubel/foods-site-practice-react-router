import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const { foodId } = useParams()
    const []
    return (
        <div>
            <h1>food details: { foodId}</h1>
        </div>
    );
};

export default FoodDetails;