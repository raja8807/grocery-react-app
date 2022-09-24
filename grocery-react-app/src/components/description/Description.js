import React from 'react'

import './Description.css'

import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Description() {

    const navigateTo = useNavigate()

    const params = useParams()
    const [product,setProduct]= useState({})

    useEffect(()=>{
        fetch(`https://632d52b4519d17fb53bb9bd0.mockapi.io/${params.category}/${params.id}`).then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((product)=>{
setProduct(product)
        })
        console.log(product);
    },[params])

    return (
        <div className='Description'>
            <div className='container'>
                <div className='DescriptionWrapper'>
                    <div className='DescriptionImageArea'>

                    </div>
                    <div className='DescriptionDetailsArea'>
                        <h1>{product.name}</h1>
                        <h2>{product.price}</h2>
                        <h4>MRP Rs.10</h4>
                        <h5>Yor Save Rs.100</h5>
                    </div>

                    <div className='btn btnNext' onClick={()=>{
                        navigateTo(`/description/${params.category}/${parseInt(params.id)+1}`)
                    }}>
                    <i className='fa fa-angle-right'></i>
                    </div>
                    <div className='btn btnPrev' onClick={()=>{
                        if(parseInt(params.id)>1){
                            navigateTo(`/description/${params.category}/${parseInt(params.id)-1}`)
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