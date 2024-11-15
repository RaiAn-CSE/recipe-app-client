import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const TopRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    console.log(recipes, "recipes");

    useEffect(() => {
        axios
            .get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then((response) => {
                console.log(response.data.meals); // Debug API response
                setRecipes(response.data.meals || []); // Fallback to empty array
            })
            .catch((error) => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="container mx-auto my-8">
            <h2 className="text-2xl font-bold mb-4">Top Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default TopRecipes;
