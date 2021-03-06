import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Header.scss';

function Header() {

    const [header, setHeader] = useState(false);
    const [menu, setMenu] = useState(false);

        const listenScrollEvent = () => {
           if(window.scrollY >= 80) {
               setHeader(true);
           }
           else {
               setHeader(false);
           }

        }
        window.addEventListener("scroll", listenScrollEvent);



    const showMenu = () => {
       setMenu(true);  
    //    document.addEventListener('click', closeMenu);     
    }

    const closeMenu = () => {
        setMenu(false);
        // console.log('close menu activated');
    }


    return (
        <div className={header ? 'header header__active' : 'header'}>
            <div className={header ? 'header__title' : 'header__titleDisabled'}>
                <Link className="header__link1" to="/">
                <RestaurantIcon/>Ralph's
                </Link>
                </div>
                
            <MenuIcon className="header__icon"
            onClick={showMenu}
            />

            <div className="header__mainLinks">
            <ul>
                <Link className="header__desktopView" to="/">
                    <li>Home</li>
                </Link>
                <Link className="header__desktopView" to="/menu">
                    <li>Menu</li>
                </Link>
                <Link className="header__desktopView" to="/menu">
                    <li>About</li>
                </Link>
                {/* <li className="header__link">About</li> */}
            </ul>
            </div>

            <div className = { menu ? 'header__showMenu' : 'header__menuC' }>
            <CloseIcon className="header__close" onClick={closeMenu}/>
            <ul>
                <Link className="header__link" to="/">
                    <li>Home</li>
                </Link>
                <Link className="header__link" to="/menu">
                    <li>Menu</li>
                </Link>
                <Link className="header__link" to="/menu">
                    <li>About</li>
                </Link>
                {/* <li className="header__link">About</li> */}
            </ul>

            </div>
            
        </div>
    )
}

export default Header
