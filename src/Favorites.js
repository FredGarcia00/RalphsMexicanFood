import React from 'react';
// import { useState } from 'react';
import './Favorites.scss';

function Favorites() {

    // const[open, isOpen] = useState(false);

    // const expand = () => {
    //     const css = `
    //     <div style={{padding:' 10px';fontSize:'30px';backgroundColor: 'red';}}>
    //         hello
    //     </div>
        
    //     `;
    //     console.log("I was clicked mane");
    //     return css;

    // }
    return (
        <div className="favorites">
            <div className="favorites__title">
               <p>Try our homemade tortillas</p>
            </div>
            <div className="favorites__container">

                <div className="favorites__pic1"></div>
             
                <div className="favorites__pic2"></div>
                <div className="favorites__pic3"></div>
                <div className="favorites__pic4"></div>
                {/* <div className="favorites__pic5"></div> */}
            </div>
        </div>
    )
}

export default Favorites
