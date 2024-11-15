const Cart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    return (
        <div className="container mx-auto">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="p-2 border-b">
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
