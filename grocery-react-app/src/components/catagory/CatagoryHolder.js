import React from 'react'

import './CatagoryHolder.css'

import Catagory from './Catagory'

import fruits from '../../assets/images/catagory/fruits.png'
import vegetables from '../../assets/images/catagory/vegetables.png'
import meats from '../../assets/images/catagory/meats.png'
import snacks from '../../assets/images/catagory/snacks.png'

function CatagoryHolder() {

    const catagories = [
        {
            id: "fruits",
            name: "Fruits",
            image: fruits

        },
        {
            id: "vegetables",
            name: "Vegetables",
            image : vegetables
        },
        {
            id: "snacks",
            name: "Snacks",
            image:snacks
        },
        {
            id: "meats",
            name: "Meats",
            image:meats
        }
    ]

    return (
        <div className='CatagoryHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Shop By Catagories</h2>

                <div className='CatagoryHolderWrapper'>
                    {
                        catagories.map((cat) => {
                            return <Catagory key={cat.id} name={cat.name} image={cat.image} path={cat.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CatagoryHolder