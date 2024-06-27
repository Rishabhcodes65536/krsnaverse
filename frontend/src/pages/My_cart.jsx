import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

const My_cart = () => {
    const [orderedBooks, setOrderedBooks] = useState([]); 
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

                // const response = await axios.get('http://localhost:9999/cart', {
                //     headers: {
                //         Authorization: `Bearer ${token}`,
                //     },
                // });
                const response = await axios.get(
                  "https://krsnaverse-api.vercel.app/cart",
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                setOrderedBooks(response.data.Orders); 
                console.log(response.data.Orders[0].items);
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
            total += item.price;
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
            setOrderedBooks(orderedBooks.filter((item) => item._id !== itemId)); 
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
                <h1 className="text-3xl text-[#5a72a7] font-bold text-center mb-8">My Cart</h1>
                {orderedBooks.length === 0 ? (
                    <div className="text-xl font-semibold text-center">Your cart is empty.</div>
                ) : (
                    <div>
                        {orderedBooks.map((order) => (
                             
                            <div key={order._id} className="border border-gray-200 rounded-lg mb-6 p-4">
                            <div className="flex justify-between mb-4">
                             <div>
                             <h2 className="text-xl font-semibold">Order Status: {order.orderStatus}</h2>
                             </div>
                             <div>
                              <p className="text-gray-600">Order Date: {new Date(order.date).toLocaleDateString()}</p>
                            </div>
                            </div>
                                {order.items.map((item) => (
                                    <div key={item._id} className="flex justify-between items-center mb-4">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.book.image} alt={item.book.name} className="w-16 h-16 object-cover rounded" />
                                            <div>
                                                <h2 className="text-xl font-semibold">{item.book.name}</h2>
                                                <p className="text-gray-600">{item.book.author}</p>
                                                <p className="text-gray-600">Price: Rs {item.book.price}</p>
                                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-600">Total: Rs {item.totalPrice}</p>
                                        </div>
                                    </div>
                                ))}
                                <div className="mt-4 flex justify-end">
                                    <div className="text-xl font-semibold">Order Total: Rs {order.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <div className="mt-8 flex justify-center">
                    <Link to="/shop" className="bg-primary px-6 py-3 rounded-lg shadow-md hover:bg-primary-dark transition duration-300">Shop more items</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default My_cart;
