import './Header.css'

import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/loginSlice';
import { Link } from 'react-router-dom';


function Header() {

  const isLoggedIn = useSelector((state)=> state.loginHandler.isLoggedIn)
  const dispatch = useDispatch()

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

                    <nav className={showNav ? "nav" : "nav hidden"}>
                        <div className='searchBar'>
                            <i className="fa fa-search"></i>
                            <input className='searchBox' placeholder='Search..' type='search' />
                        </div>
                        <Link to='/' className='navLink'>Home</Link>
                        <a href='#' className='navLink' onClick={()=>{
                            dispatch(logout())
                        }}>{isLoggedIn ? "Logout" : "Login"}</a>
                        <a href='#' className='navLink'>Signup</a>
                        <a href='#' className='navLink cartIcon' >&#128722;</a>
                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Header;