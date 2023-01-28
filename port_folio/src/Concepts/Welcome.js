
import React, { useState } from 'react';
import "./Welcome.css";

const Welcome = ({ name }) => {
    let Hii = "Enter your name Here:";
    let [search, setSearch] = useState('');
    let sayHi = `Hey ${""}!`;
    let greetMessage = `Welcome to LPU`;
    let [Name, setName] = useState("");
    return (
        <div className="greet">
            <div className="Searchbar">
                <h2>{Hii}</h2>
                <input className="Searchbar" value={search} onChange={(e) =>
                    setSearch(e.target.value)
                }
                    placeholder="Enter your Name" />
                <button onClick={() =>
                    setName(search)
                }>Login</button>
            </div>
            {Name && <div>  <h2>Hey {Name} ! </h2>
                <h2>{greetMessage}</h2> </div>}


            <h1>Assignment done by Haritha  12004670.</h1>

        </div>

    );
};

export default Welcome;