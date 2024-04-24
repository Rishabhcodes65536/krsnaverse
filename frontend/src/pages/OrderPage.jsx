import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderPage = () => {
    const [cartItems, setCartItems] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch cartItems from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        // Calculate total amount whenever cartItems change
        let amount = 0;
        for (const [id, quantity] of Object.entries(cartItems)) {
            const product = products.find((product) => product._id === id);
            if (product) {
                amount += product.price * quantity;
            }
        }
        setTotalAmount(amount);
    }, [cartItems, products]);

    useEffect(() => {
        // Fetch products from the API
        axios.get('http://localhost:9999/book')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Error fetching products. Please try again later.');
                setLoading(false);
            });
    }, []);

    const handleSubmit = async () => {
        try {
            console.log("Hiii")
            const response = await axios.post('http://localhost:9999/book', { cartItems });
            const { success } = response.data;
            console.log(success)
            if (success) {
                // Redirect to home page if order placed successfully
                window.location.href = '/';
            } else {
                // Redirect to login page if order placement failed
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="container mx-auto px-4 py-8 flex-grow">
                    <h1 className="text-3xl font-semibold text-center">Loading...</h1>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="container mx-auto px-4 py-8 flex-grow">
                    <h1 className="text-3xl font-semibold text-center">{error}</h1>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl font-semibold text-center mb-8">Your Order</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.keys(cartItems).map((id) => {
                        const item = products.find((product) => product._id === id);
                        if (!item) return null;
                        return (
                            <div key={id} className="border p-4 flex flex-col items-center">
                                <img src={item.image} alt={item.name} className="w-24 h-24 mb-2" />
                                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                                <p className="text-gray-600">Price: {item.price} Rs</p>
                                <p className="text-gray-600">Quantity: {cartItems[id]}</p>
                                {/* Display other product details as needed */}
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="text-xl font-semibold">Total Amount: {totalAmount} Rs</div>
                </div>
                <div className="mt-8 flex justify-center">
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 mr-4" onClick={handleSubmit}>
                        Submit Order
                    </button>
                    <Link to="/shop">
                        <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-700">
                            Edit Cart
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderPage;
