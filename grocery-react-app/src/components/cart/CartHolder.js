import React, { useEffect } from 'react'

import './CartHolder.css'
import { useState, useContext } from 'react'
import CartItem from './CartItem'
import Payment from './Payment'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/reducers/cartSlice'

function CartHolder() {

    const dispatch = useDispatch()

    // const [qty, setQty] = useState(1)
    // const [total, setTotal] = useState(0)
    // const [totalMRP, setTotalMRP] = useState(0)

    // // const [cartList, setCartList] = useState([])

    let total = 0
    let totalMRP = 0

    const cartList = useSelector((state) => state.cartHandler.cart)

    //   cartList.forEach((item)=>{
    //     totalMRP =item.qty* (totalMRP + parseInt(item.price))
    //     total = item.qty * (total + parseInt(item.finalPrice));
    //   })

    //   console.log(totalMRP);


    return (
        <div className='CartHolder'>
            <div className='container'>
                <div className='CartHolderWrapper'>
                    <div className='CartContainer'>
                        <button onClick={() => {
                            dispatch(clearCart())
                        }}>Clear Cart</button>
                        {
                            cartList.map((item) => {
                                totalMRP = item.qty * (totalMRP + parseInt(item.price))
                                total = item.qty * (total + parseInt(item.finalPrice));
                                return <CartItem key={Math.random()} item={item} />
                            })
                        }
                    </div>

                    <div className='PaymentContainer'>
                        <Payment total={total} mrp={totalMRP} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartHolder