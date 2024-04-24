import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OrderPage({ cartItems, products }) {
    // Check if cartItems and products are defined and not null
    console.log(cartItems, products);
    if (!cartItems || !products) {
        return (
            <>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-semibold">Loading...</h1>
                </div>
                <Footer />
            </>
        );
    }

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        for (const [id, quantity] of Object.entries(cartItems)) {
            const product = products.find((product) => product.id === Number(id));
            if (product) {
                totalAmount += quantity * product.price;
            }
        }
        return totalAmount;
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">Your Order</h1>
                <div className="grid grid-cols-3 gap-4">
                    {Object.keys(cartItems).map((id) => {
                        const product = products.find((product) => product.id === Number(id));
                        return (
                            <div key={id} className="border p-4">
                                <h2 className="font-semibold mb-2">{product.product_name}</h2>
                                <p className="text-gray-600 mb-2">Quantity: {cartItems[id]}</p>
                                <p className="text-gray-600">Price: {product.price * cartItems[id]} Rs</p>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold">Total Amount: {calculateTotalAmount()} Rs</h2>
                    {/* Add checkout button here */}
                </div>
            </div>
            <Footer />
        </>
    );
}
