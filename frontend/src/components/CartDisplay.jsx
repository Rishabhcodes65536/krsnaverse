import React from 'react';
import { Link } from 'react-router-dom';


const CartDisplay = ({ cartItems, products, totalAmount, onRemoveFromCart }) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-blue-100 p-4 border-t border-blue-500">
            <h1 className="text-2xl font-semibold mb-4">My Cart:</h1>
            {Object.keys(cartItems).map((id) => {
                const product = products.find((product) => product.id === Number(id));
                if (!product) return null; // Skip rendering if product is not found
                return (
                    <div key={id} className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <img className="w-12 h-12 mr-4 rounded" src={product.product_image} alt="" />
                            <p className="font-semibold">{product.product_name}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-4">Quantity: {cartItems[id]}</p>
                            <p className="mr-4">Total: {cartItems[id] * product.price} Rs</p>
                            <button className="text-red-500 font-semibold" onClick={() => onRemoveFromCart(id)}>Remove</button>
                        </div>
                    </div>
                );
            })}
            <div className="flex justify-between items-center mt-4">
                <p className="text-xl font-semibold">Total Amount: {totalAmount()} Rs</p>
                {/* Add Proceed to Checkout button here */}
                <Link to={{
        pathname: '/order',
        state: { cartItems: cartItems }
         }}
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
                <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">Proceed to Checkout</button>
        </Link>
            </div>
        </div>
    );
};

export default CartDisplay;
