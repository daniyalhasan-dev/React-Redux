import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from './redux/slices/cartSlices'

const Cart = () => {
    const items = useSelector(selectCartItems);
    const total = items.reduce((a, b) => a + Number(b.price), 0);

    console.log("Items:", items);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center text-black">
        Total Items: {items.length} (Rs: {total.toFixed(2)})
      </h1>
    </div>
  );
}

export default Cart
