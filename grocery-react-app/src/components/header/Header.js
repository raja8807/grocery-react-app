import './Header.css'

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/loginSlice';
import { Link } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import { useNavigate } from 'react-router-dom';


function Header() {

    const navigateTo = useNavigate()

    const isLoggedIn = useSelector((state) => state.loginHandler.isLoggedIn)
    const user = useSelector((state) => state.loginHandler.user)
    const dispatch = useDispatch()

    const [showNav, setShowNav] = useState(false)

    return (
        <header className='header'>
            <div className='container'>
                <div className='headerWrapper'>
                    <div className='headerLogo'>
                        <Link to='/'>

                            <h1 className='logo'><span className='logoSpan'>Gro</span>fe<span className='logoSpan'>'</span></h1>
                        </Link>
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
                        <Link to='/' className='navLink' onClick={() => {
                            setShowNav(!showNav)
                        }}>Home</Link>
                        {isLoggedIn ? <Link className='navLink' onClick={() => {
                            setShowNav(!showNav)
                            dispatch(logout())
                        }}>Logout</Link> : <Link className='navLink' to={'login'} onClick={() => {
                            setShowNav(!showNav)
                        }}>Login</Link>}
                        <a href='#' className='navLink'>Signup</a>
                        <Link to='/cart' className='navLink cartIcon'><CartIcon /></Link>

                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Header;