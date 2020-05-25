import React from 'react';

const OutputGoals = ({ goalCalories, proteins, proteinsIndex, carbohydrates, carbohydratesIndex, fats, fatsIndex }) => (
    <section>
        <div className='text-container'>
            <p>
                Calories you should eat a day to reach your goal is <span>{goalCalories}</span> kcal.
            </p>
            <h2>Recommended macronutrients:</h2>
            <p>Proteins: {proteins} g</p>
            <p className='small'>{proteinsIndex} g/kg body weight</p>
            <p>Carbohydrates: {carbohydrates} g</p>
            <p className='small'>{carbohydratesIndex} g/kg body weight</p>
            <p>Fats: {fats} g</p>
            <p className='small'>{fatsIndex} g/kg body weight</p>
        </div>
    </section>
);

export default OutputGoals;
