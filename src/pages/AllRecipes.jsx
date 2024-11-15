import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => setRecipes(response.data.meals || []))
            .catch(error => console.error('Error fetching recipes:', error));
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.idMeal} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default AllRecipes;
