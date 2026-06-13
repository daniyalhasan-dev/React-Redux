import React from "react";
import {useDispatch} from 'react-redux'
import {addItem} from '../components/redux/slices/cartSlices'

const Card = ({ product }) => {
    const dispatch = useDispatch();
  return (
    <>
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.8)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_35px_100px_-35px_rgba(15,23,42,0.9)]">
      <div className="overflow-hidden rounded-t-[1.8rem] bg-slate-900">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-6 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {product.title}
        </h2>
        <p className="text-3xl font-semibold text-white">${product.price}</p>
      </div>

      <div className="border-t border-white/10 bg-slate-900/90 p-5">
        <button
          onClick={() =>
            dispatch(
              addItem({
                name: product.title,
                price: Number(product.price),
                image: product.image,
              })
            )
          }
          className="w-full rounded-[1.5rem] bg-gradient-to-r from-cyan-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:brightness-110"
        >
          Add to cart
        </button>
      </div>
    </div>
    </>
  );
};

export default Card;
