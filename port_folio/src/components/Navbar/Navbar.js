import React from "react";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_left">
                <p>Flipkart</p>

                <input className="navbar_left_input" placeholder="Search for products, brands and more" />
            </div>
            <div className="navbar_right">
                <button onclick="myFunction()">Login</button>
                <p>Become a Seller</p>
                <p>More</p>
                <p>Cart</p>
            </div>
        </div>

    );
};

export default Navbar;