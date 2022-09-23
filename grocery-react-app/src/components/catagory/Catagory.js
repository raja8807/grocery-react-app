import React from 'react'
import './Catagory.css'
// import img from '../../assets/images/test.cms'

import { useNavigate } from 'react-router-dom'

function Catagory(props) {

    const navigateTo = useNavigate()

    return (
        <div className='Catagory'>
            <a href={'/store/'+props.path}>
            <div className='CatagoryImage'>
<img src={props.image} alt='img'/>
            </div>
            <div className='CatagoryName'>
<h4>{props.name}</h4>
            </div>
            </a>
        </div>
    )
}

export default Catagory