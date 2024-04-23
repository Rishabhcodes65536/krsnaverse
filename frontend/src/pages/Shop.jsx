import React from 'react'
import Cart from '../components/Cart'

const products = [
    {
        id:1,
        product_name:"Bhagwad gita",
        price: 100,
        product_image: '/images/c1.jpeg',
    },
    {
        id:2,
        product_name:"Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c2.jpeg',
    },
    {
        id:3,
        product_name:"Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c3.jpeg',
    },
    {
        id:4,
        product_name:"Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c4.jpeg',
    },
    {
        id:5,
        product_name:"Srimad Bhagwatam",
        price: 100,
        product_image: '/images/c5.jpeg',
    },
]

export default function Shop() {
  return (
    <div>
      <Cart products = {products} />
    </div>
  )
}
