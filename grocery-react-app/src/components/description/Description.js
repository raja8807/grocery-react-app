import React from 'react'

import './Description.css'
import loading from '../../assets/loading.gif'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Description() {
    const navigateTo = useNavigate()

    const params = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://my-json-server.typicode.com/raja8807/grocery-app-data-${params.category}/${params.category}/${params.id}`).then((response) => {
            if (response.ok) {
                return response.json()
            }
            navigateTo(`/description/${params.category}/1`)
            return false
        }).then((product) => {
            setProduct(product)
            setIsLoading(false)
        })
        // console.log(product);
    }, [params])

    return (
        <div className='Description'>
            <div className='container'>
                <button className='addToCartBtn' id='backBtn' onClick={()=>{
                    navigateTo("/store/"+params.category)
                }}>Back To Shopping</button>
                <div className='DescriptionWrapper'>
                    <div className='DescriptionImageArea'>
                        <img src={isLoading ? loading : product.image} alt={product.name} />
                    </div>
                    {
                        !isLoading && <div className='DescriptionDetailsArea'>
                            <h1>{product.name}</h1>
                            <h2>{product.price}</h2>
                            <h4>MRP Rs.10</h4>
                            <h5>Yor Save Rs.100</h5>
                            <p>{product.description}</p>
                        </div>
                    }

                    <div className='btn btnNext' onClick={() => {
                        navigateTo(`/description/${params.category}/${parseInt(params.id) + 1}`)
                    }}>
                        <i className='fa fa-angle-right'></i>
                    </div>
                    <div className='btn btnPrev' onClick={() => {
                        if (parseInt(params.id) > 1) {
                            navigateTo(`/description/${params.category}/${parseInt(params.id) - 1}`)
                        }
                    }}>
                        <i className='fa fa-angle-left'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Description