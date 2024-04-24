// import React from 'react'
// import Cart from '../components/Cart'


// export default function Shop() {
//   return (
//     <div>

//       <Cart products = {products} />

//     </div>
//   )
// }
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDisplay from '../components/CartDisplay';
import { Link } from 'react-router-dom';

const products = [
    {
        id: 1,
        product_name: "Bhagwad gita",
        price: 100,
        product_image: '/images/c1.jpeg',
    },
    {
        id: 2,
        product_name: "Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c2.jpeg',
    },
    {
        id: 3,
        product_name: "Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c3.jpeg',
    },
    {
        id: 4,
        product_name: "Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c4.jpeg',
    },
    {
        id: 5,
        product_name: "Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c5.jpeg',
    },
];

export default function Shopping() {
    const [cartItems, setCartItems] = useState({});

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
            const product = products.find((product) => product.id === Number(id));
            if (product) {
                amount += quantity * product.price;
            }
        }
        return amount;
    };

    return (
        <>
            <Navbar cartItemsCount={Object.keys(cartItems).length} />
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-3 gap-4">
                    {/* Product cards */}
                    {products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid #000', padding: '1rem', marginBottom: '1rem' }}>
                            <img src={product.product_image} alt="" style={{ width: '100%', marginBottom: '0.5rem' }} />
                            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{product.product_name}</h2>
                            <p style={{ color: '#666', marginBottom: '0.5rem' }}>Price: {product.price} Rs</p>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <button style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem' }} onClick={() => addToCart(product.id)}>+</button>
                                <input type="text" value={cartItems[product.id] || ''} readOnly style={{ margin: '0 0.5rem', width: '3rem', textAlign: 'center', border: '1px solid #ccc', borderRadius: '0.25rem' }} />
                                <button style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '0.5rem', borderRadius: '0.25rem' }} onClick={() => removeFromCart(product.id)}>-</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Cart Display */}
                <CartDisplay cartItems={cartItems} products={products} totalAmount={totalAmount} onRemoveFromCart={removeFromCart} />

                {/* Proceed to Checkout Button */}
                {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <Link to="/order" style={{ backgroundColor: '#007bff', color: '#fff', fontWeight: 'bold', padding: '0.5rem 1rem', borderRadius: '0.25rem', textDecoration: 'none', textAlign: 'center' }}>
                        Proceed to Checkout
                    </Link>
                </div> */}
            </div>
            <Footer />
        </>
    );
}
