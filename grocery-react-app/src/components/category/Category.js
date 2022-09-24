import React from 'react'
import './Category.css'
// import img from '../../assets/images/test.cms'

import { useNavigate, Link } from 'react-router-dom'

function Category(props) {

    const navigateTo = useNavigate()

    return (
        <div className='category'>
            <Link to={'/store/'+props.path}>
            <div className='categoryImage'>
<img src={props.image} alt='img'/>
            </div>
            <div className='categoryName'>
<h4>{props.name}</h4>
            </div>
            </Link>
        </div>
    )
}

export default Category