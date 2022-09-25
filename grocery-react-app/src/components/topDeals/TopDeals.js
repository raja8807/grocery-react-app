import React from 'react'
import './TopDeals.css'

import Product from '../product/Product'

import { useEffect, useState } from 'react'

function TopDeals() {


    // const topDeals1 = [
    //     {
    //         id: 1,
    //         name: "product name 1",
    //         price: 500,
    //         offer: 57,
    //         category:"fruits"
    //     },
    //     {
    //         id: 2,
    //         name: "product name 2",
    //         price: 300,
    //         offer: 57,
    //         category:"vegetables"
    //     },
    //     {
    //         id: 3,
    //         name: "product name 3",
    //         price: 100,
    //         offer: 57,
    //         category:"snacks"

    //     },
    //     {
    //         id: 4,
    //         name: "product name 4",
    //         price: 700,
    //         offer: 57,
    //         category:"meats"
    //     }
    // ]

    const [topDeals, setTopDeals] = useState([])

    useEffect(()=>{
        setTopDeals([])
        fetch('https://my-json-server.typicode.com/raja8807/grocery-react-app/fruits').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((fruits)=>{
            let sorted = fruits.sort((a,b)=>{
                return b.offer - a.offer
            });
           setTopDeals((prev)=>{
            return [...prev,sorted[0]]
           })
        }).then(()=>{
            fetch('https://my-json-server.typicode.com/raja8807/grocery-react-app/vegetables').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((vegetables)=>{
            let sorted = vegetables.sort((a,b)=>{
                return b.offer - a.offer
            });
            setTopDeals((prev)=>{
                return [...prev,sorted[0]]
               })
        })
        }).then(()=>{
            fetch('https://my-json-server.typicode.com/raja8807/grocery-react-app/fruits').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((snacks)=>{
            let sorted = snacks.sort((a,b)=>{
                return b.offer - a.offer
            });
            setTopDeals((prev)=>{
                return [...prev,sorted[0]]
               })
        })
        }).then(()=>{
            fetch('https://my-json-server.typicode.com/raja8807/grocery-react-app/vegetables').then((response)=>{
            if(response.ok){
                return response.json()
            }
            return false
        }).then((meats)=>{
            let sorted = meats.sort((a,b)=>{
                return b.offer - a.offer
            });
            setTopDeals((prev)=>{
                return [...prev,sorted[0]]
               })
        })
        })
    },[])

    return (
        <div className='TopDealHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>Top Deals</h2>
                <div className='TopDealHolderWrapper'>
                    {
                        topDeals.map((item)=>{
                            return <Product key={Math.random()} product={item} category={"Top Deals"}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TopDeals