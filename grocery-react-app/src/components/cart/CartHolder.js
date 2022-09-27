import React from 'react'

import './CartHolder.css'
import { useState } from 'react'

import CartItem from './CartItem'
import Payment from './Payment'

import testImg from '../../assets/images/category/fruits.png'


function CartHolder() {

    const [qty , setQty] = useState(1)

    const cartList = [
        {
            id: "1",
            name: "product appaoiahdca",
            price: "440.00",
            offer: 20,
            description: "sdjvksjd vvskjd vsj djv skjd vkjsj dkjv sjjdvunsdvj sd sidvjks jdvouiasdjvv",
            image: testImg,
            category: "fruits",
            veg: true
        },
        {
            id: "2",
            name: "product appaoiahdca",
            price: "120.00",
            offer: 4,
            description: "sdjvksjd vvskjd vsj djv skjd vkjsj dkjv sjjdvunsdvj sd sidvjks jdvouiasdjvv",
            image: testImg,
            category: "fruits",
            veg: true
        },
        {
            id: "3",
            name: "product appaoiahdca",
            price: "162.00",
            offer: 12,
            description: "sdjvksjd vvskjd vsj djv skjd vkjsj dkjv sjjdvunsdvj sd sidvjks jdvouiasdjvv",
            image: testImg,
            category: "fruits",
            veg: true
        },
    ]

    let total = 0;
    let totalMRP = 0

    cartList.forEach((item)=>{
        item.finalPrice = item.price - ((item.offer/100)*item.price)
        total = total + parseInt(item.finalPrice)
        totalMRP = totalMRP + parseInt(item.price)
    })

    return (
        <div className='CartHolder'>
            <div className='container'>
                <div className='CartHolderWrapper'>
                    <div className='CartContainer'>
                        {
                            cartList.map((item) => {
                                return <CartItem key={item.id} item={item}/>
                            })
                        }
                    </div>

                    <div className='PaymentContainer'>
                        <Payment total={total} mrp={totalMRP}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartHolder