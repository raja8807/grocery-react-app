import './ProductHolder.css'

import Product from './Product'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductHolder() {
    let catagory = useParams().catagory

    const [products, setProducts] = useState([])
    // const [currentCatagory,setCatagory] = useState(catagory.path)

    useEffect(() => {
        fetch('https://632d52b4519d17fb53bb9bd0.mockapi.io/' + catagory).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((data) => {
            if (data) {
                setProducts(data)
            }
            // console.log(products);
        })
    }, [catagory])

    return (
        <div className='ProductHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>{catagory}</h2>
                <div className='ProductHolderWrapper'>
                    {
                        products.map((item) => {
                            return <Product key={Math.random()} product={item} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductHolder;