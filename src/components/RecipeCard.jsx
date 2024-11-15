const RecipeCard = ({ recipe }) => {
    if (!recipe) {
        return <div>No Recipe Found</div>;
    }

    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: recipe.strMeal });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Recipe added to cart!');
    };

    return (
        <div className="border rounded p-4">
            <img
                src={recipe?.strMealThumb || 'placeholder.jpg'}
                alt={recipe?.strMeal || 'Recipe'}
                className="w-full h-40 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-bold">{recipe?.strMeal || 'Unknown Recipe'}</h3>
            <button onClick={addToCart} className="mt-2 bg-blue-500 text-white p-2 rounded">
                Add to Cart
            </button>
        </div>
    );
};

export default RecipeCard;
