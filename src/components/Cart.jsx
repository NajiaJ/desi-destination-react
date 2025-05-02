import React, { useState } from 'react';
import './Cart.css';

function Cart({ cartItems, setCartItems, isOpen, closeCart }) {
  return (
    <div
      id="sideBarCart"
      style={{ width: isOpen ? '300px' : '0' }}
    >
      <button className="closeButton" onClick={closeCart}>×</button>
      <h3>Cart</h3>
      <div id="cartContents">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name} - ${item.price.toFixed(2)} × {item.quantity}</span>
              <button onClick={() => {
                const updated = cartItems.map(ci =>
                  ci.name === item.name
                    ? { ...ci, quantity: ci.quantity - 1 }
                    : ci
                ).filter(ci => ci.quantity > 0);
                setCartItems(updated);
              }}>-</button>
              <button onClick={() => {
                const updated = cartItems.map(ci =>
                  ci.name === item.name
                    ? { ...ci, quantity: ci.quantity + 1 }
                    : ci
                );
                setCartItems(updated);
              }}>+</button>
              <button onClick={() => {
                const updated = cartItems.filter(ci => ci.name !== item.name);
                setCartItems(updated);
              }}>Remove</button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <button className="clearButton" onClick={() => setCartItems([])}>Clear Cart</button>
      )}
    </div>
  );
}

export default Cart;