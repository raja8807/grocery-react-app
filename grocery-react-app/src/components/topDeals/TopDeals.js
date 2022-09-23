import React from 'react'
import './TopDeals.css'

import Product from '../product/Product'

function TopDeals() {


    const topDeals = [
        {
            id: 1,
            name: "product name 1",
            price: 500,
            offer: 57
        },
        {
            id: 2,
            name: "product name 2",
            price: 300,
            offer: 57
        },
        {
            id: 3,
            name: "product name 3",
            price: 100,
            offer: 57
        },
        {
            id: 4,
            name: "product name 4",
            price: 700,
            offer: 57
        }
    ]

    return (
        <div className='TopDealHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Top Deals</h2>
                <div className='TopDealHolderWrapper'>
                    {/* {
                        topDeals.map((deal)=>{
                            return <Product key={deal.id}/>
                        })
                    } */}
                </div>
            </div>
        </div>
    )
}

export default TopDeals