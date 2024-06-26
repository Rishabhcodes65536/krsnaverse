import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDisplay from '../components/CartDisplay';
import { Link } from 'react-router-dom';

export default function Shopping() {
    const [books, setBooks] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : {};
    });

    // Fetch books from backend API on component mount
    useEffect(() => {
    
        // axios.get('http://localhost:9999/book')
        //     .then(response => {
        //         setBooks(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching books:', error);
        //     });
        axios
          .get("https://krsnaverse-api.vercel.app/book")
          .then((response) => {
            setBooks(response.data);
          })
          .catch((error) => {
            console.error("Error fetching books:", error);
          });
    }, []);

    // Update local storage when cart items change
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (id) => {
        setCartItems((prevCartItems) => ({
            ...prevCartItems,
            [id]: (prevCartItems[id] || 0) + 1,
        }));
    };

    const removeFromCart = (id) => {
        const updatedCartItems = { ...cartItems };
        delete updatedCartItems[id];
        setCartItems(updatedCartItems);
    };

    const totalAmount = () => {
        let amount = 0;
        for (const [id, quantity] of Object.entries(cartItems)) {
            const book = books.find((book) => book._id === id);
            if (book) {
                amount += quantity * book.price;
            }
        }
        return amount;
    };

    return (
        <>
            <Navbar cartItemsCount={Object.keys(cartItems).length} />
            <div className='text-4xl mx-[40vw] text-[#5a72a7] flex justify-center my-10 font-bold '>
              <h2 className="">Books</h2>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-4">
                    {/* Product cards */}
                    {books.map((book) => (
                        <div key={book._id} style={{ border: '1px solid #000', padding: '1rem', marginBottom: '1rem' }}>
                            <img className='w-[30vw] h-[70vh]' src={book.image} alt="" style={{ marginBottom: '0.5rem' }} />
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{book.name}</h2>
                            <p style={{ color: '#666', marginBottom: '0.5rem' }}>Author: {book.author}</p>
                            <p style={{ color: '#666', marginBottom: '0.5rem' }}>Price: {book.price} Rs</p>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <button style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem' }} onClick={() => addToCart(book._id)}>+</button>
                                <input type="text" value={cartItems[book._id] || ''} readOnly style={{ margin: '0 0.5rem', width: '3rem', textAlign: 'center', border: '1px solid #ccc', borderRadius: '0.25rem' }} />
                                <button style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem' }} onClick={() => removeFromCart(book._id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Cart Display */}
                <CartDisplay cartItems={cartItems} books={books} totalAmount={totalAmount} onRemoveFromCart={removeFromCart} />
            </div>
            <Footer />
        </>
    );
}
