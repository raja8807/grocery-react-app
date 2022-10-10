import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'
import banner1 from '../../assets/images/banner/banner.jpg'

function Banner() {

    return (
        <div className='Banner'>

            <div className='bannerImageArea'>

                <div className='headerLogo bannerLogo'>
                    <Link to='/'>

                        <h1 className='logo'><span className='logoSpan'>Gro</span>fe<span className='logoSpan'>'</span></h1>
                        <p>The <span className='logoSpan'>Grocery</span> Cafe'</p>
                        
                    </Link>
                </div>

                <img src={banner1} />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Banner