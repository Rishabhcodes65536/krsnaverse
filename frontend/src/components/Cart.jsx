import React ,{useState} from 'react'



export default function Cart({products}) {

    const [cartItems, setCartItems] = useState({1:0, 2:0, 3:0, 4:0, 5:0})

    const addToCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] + 1}))
    }
    const subFromCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] - 1}))
    }
    const removeFromCart = (id) => {
        setCartItems(cartItems => ({...cartItems, [id]: cartItems[id] = 0}))
    }
    const totalAmount = () =>{
        let amount = 0;
        for (const key in cartItems)
        {
            if(cartItems[key] > 0)
            {
                let productInfo = products.find(product => product.id === Number(key))
                amount += Math.floor(cartItems[key] * productInfo.price)
            }
        }

        return amount;
    }

  return (
    
    <div className='flex flex-wrap justify-center items-center gap-20 p-10'>
        <div className='fixed p-4 top-0 bg-blue-200 h-screen w-full overflow-y-scroll border border-red-900'>
    {products.map((product, index) => (
            <div>
            <img w-40 h-40  src={product.product_image} alt="" />
            <p>{product.product_name}</p>
            <p>{product.price}Rs.</p>
            <button className='border-2 drop-shadow-2xl p-2 rounded hover:bg-green-300' onClick={()=> addToCart(product.id)}>Add To Cart</button>
        </div>
        ))}
        </div>
        

        <div className='fixed p-4 right-0 top-0 bg-blue-100 h-screen w-80 overflow-y-scroll'>
            <h1 className='text-white font-bold text-2xl'>Your cart</h1>
            <p className='text-3xl font-bold '>Total: {totalAmount()} Rs</p>
            {products.map((product, index) => (
                cartItems[product.id] > 0 ? (
                    <>
                    <div key={index} className='flex justify-between items-center'>
                        <div className='flex items-center'>
                            <img className='w-20 h-20 my-4' src={product.product_image} alt="" />
                            X <p className='text-2xl font-bold pl-2'>{cartItems[product.id]}</p>
                        </div>

                        <div className='flex flex-col gap-2 font-bold'>
                            <button onClick={()=> removeFromCart(product.id)} className='text-red-500 bg-red-200 hover:bg-red-500 hover:text-white p-2 rounded '>Remove</button>
                            <button onClick={()=> addToCart(product.id)} className='text-green-500 text-2xl hover:text-green-700'>+</button>
                            <button onClick={()=> subFromCart(product.id)} className='text-red-500 text-2xl hover:text-red-700'>-</button>
                        </div>
                    </div>
                    <div className='flex item-center space-x-4 italic'>
                        <p>{product.product_name}</p>
                        <p>-</p>
                        <p>{product.price} Rs</p>
                    </div>
                    </>
                ) : null
            ))}
        </div>
    </div>

    
  )
};
