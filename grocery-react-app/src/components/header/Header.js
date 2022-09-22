import './Header.css'

import { useState } from 'react';

function Header() {

    const [showNav, setShowNav] = useState(false)

    return (
        <header className='header'>
            <div className='container'>
                <div className='headerWrapper'>
                    <div className='headerLogo'>
                        <h1 className='logo'><span className='logoSpan'>Gro</span>fe<span className='logoSpan'>'</span></h1>
                    </div>

                    <div className='barHolder' onClick={() => {
                        setShowNav(!showNav)
                    }}>
                        <div className='bar'></div>
                        <div className='bar'></div>
                        <div className='bar'></div>
                    </div>

                    <nav className={showNav ? "nav" : "hidden"}>
                        <div className='searchBar'>
                            <i class="fa fa-search"></i>
                            <input className='searchBox' placeholder='Search..' type='search' />
                        </div>
                        <a href='#' className='navLink'>Home</a>
                        <a href='#' className='navLink'>Login</a>
                        <a href='#' className='navLink'>Signup</a>
                        <a href='#' className='navLink cartIcon' >&#128722;</a>
                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Header;