import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from "../contexts/CartContext";
import { Link } from 'react-router-dom';

const Checkout = () => {
  const{addItem,removeItem,updateItem,items,total,sum}=useCart()
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">{items.length===0 ?"Uh oh Your cart is empty !" :"Your Shopping Cart"}</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {items.map((item) => (
              <motion.li
                key={item.id}
                className="p-4 sm:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => item.quantity===1 ? removeItem(item.id) :updateItem(item.id, -1)}
                      className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                      aria-label="Decrease quantity"
                    >
                      <FaMinus className="h-5 w-5" />
                    </button>
                    <span className="text-gray-900 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateItem(item.id, 1)}
                      className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400"
                      aria-label="Increase quantity"
                    >
                      <FaPlus className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 p-2 text-slate-500 hover:text-slate-700 focus:outline-none"
                    aria-label="Remove item"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              </motion.li>
            ))}
          </ul>
          <div className="px-4 py-6 bg-gray-50 border-t border-gray-200 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${total(items)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-slate-500 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                <FaLock className="mr-2" />
                Checkout
              </motion.button>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link to="/">
                <button type="button" className="text-slate-400 font-medium hover:text-slate-600">
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;