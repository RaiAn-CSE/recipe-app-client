import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
            <Link to="/" className="font-bold">Recipe App</Link>
            <div className="space-x-4">
                <Link to="/recipes">All Recipes</Link>
                <Link to="/auth">Auth</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
