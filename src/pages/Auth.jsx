import { useState, useEffect } from "react";

const Auth = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    });
    const [isRegistering, setIsRegistering] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState(null);

    // Check if a user is already logged in
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setLoggedInUser(storedUser);
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Save user data to localStorage
        localStorage.setItem("user", JSON.stringify(formData));
        setLoggedInUser(formData);
        alert("Account created successfully! You are logged in.");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (
            storedUser &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ) {
            setLoggedInUser(storedUser);
            alert(`Welcome back, ${storedUser.name}!`);
        } else {
            alert("Invalid email or password. Please try again or register.");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedInUser(null);
        alert("Logged out successfully!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                {loggedInUser ? (
                    // If logged in, show a welcome message and logout option
                    <>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            Welcome, {loggedInUser.name}!
                        </h2>
                        <p className="text-center text-gray-700 mb-6">
                            You are logged in with email:{" "}
                            <strong>{loggedInUser.email}</strong>
                        </p>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    // Show Login or Register form dynamically
                    <>
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                            {isRegistering ? "Register" : "Login"}
                        </h2>
                        <form
                            onSubmit={isRegistering ? handleRegister : handleLogin}
                            className="space-y-6"
                        >
                            {isRegistering && (
                                <>
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-gray-700 mb-1"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </>
                            )}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-1"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                            >
                                {isRegistering ? "Register" : "Login"}
                            </button>
                        </form>
                        <p className="mt-6 text-center text-gray-600">
                            {isRegistering
                                ? "Already have an account? "
                                : "Don't have an account? "}
                            <button
                                onClick={() => setIsRegistering(!isRegistering)}
                                className="text-blue-500 hover:underline"
                            >
                                {isRegistering ? "Login" : "Register"}
                            </button>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Auth;
