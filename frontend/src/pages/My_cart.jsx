import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const My_cart = () => {
    const [orderedBooks, setOrderedBooks] = useState([]); // Renamed to orderedBooks
    const [totalAmount, setTotalAmount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    window.location.href = '/login';
                    return;
                }

                const response = await axios.get('http://localhost:9999/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                // console.log(response);
                setOrderedBooks(response.data.Orders); // Set orderedBooks
                setLoading(false);
            } catch (error) {
                console.error('Error fetching ordered books:', error);
                setError('Error fetching ordered books. Please try again later.');
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    useEffect(() => {
        let total = 0;
        orderedBooks.forEach((item) => {
            total += item.books.price * item.quantity;
        });
        setTotalAmount(total);
    }, [orderedBooks]);

    const handleRemoveItem = async (itemId) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/login';
                return;
            }

            await axios.delete(`http://localhost:9999/cart/${itemId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setOrderedBooks(orderedBooks.filter((item) => item._id !== itemId)); // Update orderedBooks
        } catch (error) {
            console.error('Error removing item from cart:', error);
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
                <h1 className="text-3xl font-semibold text-center mb-8">My Cart</h1>
                {orderedBooks.length === 0 ? (
                    <div className="text-xl font-semibold text-center">Your cart is empty.</div>
                ) : (
                    <div>
                        {orderedBooks.map((item) => (
                            <div key={item._id} className="flex justify-between items-center border-b border-gray-200 py-4">
                                <div>
                                    <h2 className="text-xl font-semibold">{item.books.name}</h2>
                                    <p className="text-gray-600">{item.books.author}</p>
                                    <p className="text-gray-600">Price: Rs {item.books.price}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <button className="text-red-500 font-semibold" onClick={() => handleRemoveItem(item._id)}>Remove</button>
                            </div>
                        ))}
                        <div className="mt-8 flex justify-center">
                            <div className="text-xl font-semibold">Total Amount: Rs {totalAmount}</div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default My_cart;
