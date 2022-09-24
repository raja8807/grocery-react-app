import React from 'react'

import './CategoryHolder.css'

import Category from './Category'

import fruits from '../../assets/images/category/fruits.png'
import vegetables from '../../assets/images/category/vegetables.png'
import meats from '../../assets/images/category/meats.png'
import snacks from '../../assets/images/category/snacks.png'

function CategoryHolder() {

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
        <div className='categoryHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Shop By Categories</h2>

                <div className='categoryHolderWrapper'>
                    {
                        catagories.map((cat) => {
                            return <Category key={cat.id} name={cat.name} image={cat.image} path={cat.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryHolder;