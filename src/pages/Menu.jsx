import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import React, { useState } from 'react';
import './Home.css'
import './Menu.css'

function Menu() {

    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
  
    const addToCart = (itemName, itemPrice) => {
        const existingItem = cartItems.find(item => item.name === itemName);
        
        if (existingItem) {
        const updatedItems = cartItems.map(item =>
            item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
        } else {
        const newItem = { name: itemName, price: itemPrice, quantity: 1 };
        setCartItems([...cartItems, newItem]);
        }
    };

    return(
        <>
            <Navbar setIsCartOpen={setIsCartOpen} />

            {!isCartOpen && (
                <button onClick={() => setIsCartOpen(true)} className="open-cart-button">
                    🛒 View Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </button>
            )}

            <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                isOpen={isCartOpen}
                closeCart={() => setIsCartOpen(false)}
            />

            <section>
                <h1 className="menu-title">
                    <p> MENU </p>
                </h1>
            </section>

            <div className="menu-card">
            <div className="biriyani">
                <div className="biriyani-container">
                    <h2> Biriyani </h2>
                    <h4> Chicken Biriyani: </h4>
                    <p> $13.00 </p> 
                    <button onClick={() => addToCart('Chicken Biriyani', 13.00)}> Add to Cart </button>

                    <h4> Beef Biriyani: </h4>
                    <p> $13.00 </p> 
                    <button onClick={() => addToCart('Beef Biriyani', 13.00)}> Add to Cart </button>

                    <h4> Goat Biriyani: </h4>
                    <p> $13.00 </p> 
                    <button onClick={() => addToCart('Goat Biriyani', 13.00)}> Add to Cart </button>
                </div>
            </div>

            <div className="snacks">
                <div className="snacks-container">
                    <h2> Appetizers </h2>
                    <h4> Samosa: </h4>
                    <p> 1 piece </p>
                    <p> $1.25 </p> 
                    <button onClick={() => addToCart('Samosa', 1.25)}> Add to Cart </button>

                    <h4> Shingara: </h4>
                    <p> 1 piece </p>
                    <p> $1.25 </p> 
                    <button onClick={() => addToCart('Shingara', 1.25)}> Add to Cart </button>
                </div>
            </div>

            <div className="dessert">
                <div className="dessert-container">
                    <h2> Desserts </h2>
                    <h4> Kalojam: </h4>
                    <p> 1 BOX </p>
                    <p> $8.00 </p> 
                    <button onClick={() => addToCart('Kalojam', 8.00)}> Add to Cart </button>

                    <h4> Jilapi: </h4>
                    <p> 1 BOX </p>
                    <p> $8.00 </p> 
                    <button onClick={() => addToCart('Jilapi', 8.00)}> Add to Cart </button>
                </div>
            </div>
            </div>

            <div className="scroll-menu">
                <div className="img">
                    <img src="/chicken-Biryani.jpg" alt="Chicken Biryani" />
                    <img src="/beef-biryani.jpg" alt="Beef Biryani" />
                    <img src="/samosa.jpg" alt="Samosas"/>
                    <img src="/shingara.webp" alt="Shingaras"/>
                    <img src="/kalojam.jpg" alt="Kalojam"/>
                    <img src="/jilapi.avif" alt="Jilapi"/>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Menu