import React from 'react'
import './CartItem.css'

import { useState } from 'react'

import testImg from '../../assets/images/category/fruits.png'

function CartItem({item}) {

    const [qty,setQty] = useState(1)
    const finalPrice = parseInt(item.price - ((item.offer/100)*item.price))

    return (
        <div className='CartItem'>

            <div className='CartItemWrapper'>
                <div className='CartImageArea'>
                    <img src={item.image} alt='image' />
                </div>
                <div className='CartDetailsArea'>
                    <h2 className='CartProductName'>{item.name}</h2>
                    <p className='CartPrice'><strong>Rs.{finalPrice}</strong>
                        <span className='CartMRP'> <del>Rs.{item.price}</del> </span>
                        <span className='CartSave'> You save Rs.{item.price-finalPrice}</span>
                    </p>
                </div>
            </div>

            <div className={`qtyWrapper`}>
                <button className={qty == 1 && "inactive"} onClick={()=>{
                    if(qty>1){
                        setQty(qty-1)
                    }
                }}>-</button>
                <p>{qty}</p>
                <button onClick={()=>{
                    
                        setQty(qty+1)
                    
                }}>+</button>
                <h2> Rs.{finalPrice*qty} </h2>
            </div>
            <br />
            <hr />
        </div>
    )
}

export default CartItem