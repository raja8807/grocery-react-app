import React from 'react'
import './TopDeals.css'

import Product from '../product/Product'
import loading from '../../assets/loading.gif'


import { useEffect, useState } from 'react'

function TopDeals() {

    const [topDeals, setTopDeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTopDeals([])
        setIsLoading(true)
        fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-fruits/fruits').then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((fruits) => {
            let sorted = fruits.sort((a, b) => {
                return b.offer - a.offer
            });
            setTopDeals((prev) => {
                return [...prev, sorted[0]]
            })
        }).then(() => {
            fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-vegetables/vegetables').then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return false
            }).then((vegetables) => {
                let sorted = vegetables.sort((a, b) => {
                    return b.offer - a.offer
                });
                setTopDeals((prev) => {
                    return [...prev, sorted[0]]
                })
            })
        }).then(() => {
            fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-snacks/snacks').then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return false
            }).then((snacks) => {
                let sorted = snacks.sort((a, b) => {
                    return b.offer - a.offer
                });
                setTopDeals((prev) => {
                    return [...prev, sorted[0]]
                })
            })
        }).then(() => {
            fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-meats/meats').then((response) => {
                if (response.ok) {
                    return response.json()
                }
                return false
            }).then((meats) => {
                let sorted = meats.sort((a, b) => {
                    return b.offer - a.offer
                });
                setTopDeals((prev) => {
                    return [...prev, sorted[0]]
                })
            })
        }).then(() => {
            topDeals.forEach((item)=>{
                item.finalPrice = parseInt(item.price - ((item.offer/100)*item.price))
            })
            setIsLoading(false)  
        })
    }, [])

    return (
        <div className='TopDealHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Top Deals</h2>
                <div className='TopDealHolderWrapper'>
                    {   isLoading ? <img src={loading}/> :
                        topDeals.map((item) => {
                            return <Product key={Math.random()} product={item} category={"Top Deals"} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopDeals