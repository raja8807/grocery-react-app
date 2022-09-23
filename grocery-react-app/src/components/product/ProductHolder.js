import './ProductHolder.css'

import Product from './Product'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductHolder() {
    let params = useParams()
    const [products, setProducts] = useState([])
    // const [currentCatagory,setCatagory] = useState(catagory)

    useEffect(() => {
        fetch('https://632d52b4519d17fb53bb9bd0.mockapi.io/' + params.catagory).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((data) => {
            if (data) {
                setProducts(data)
            }
        })
    },[params])

    return (
        <div className='ProductHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>{params.catagory}</h2>
                <div className='ProductHolderWrapper'>
                    {
                        products.map((item) => {
                            return <Product key={Math.random()} product={item} catagory={params.catagory}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductHolder;