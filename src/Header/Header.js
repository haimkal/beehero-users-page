import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <div>
            <header className="Header">
                <nav className="navbar ">
                    <Link to="/" className="navbar-brand">
                        <div className='containerBrand'>
                            <img src='https://i.ibb.co/Bs2xB7S/beehero-icon.png' alt='logo' />
                            <span className='companyName'>BeeHero</span>
                        </div>
                    </Link>
                </nav>
            </header>
        </div>
    )
}
