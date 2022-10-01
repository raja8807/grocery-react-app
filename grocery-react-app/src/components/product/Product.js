import './Product.css'

import img from '../../assets/images/test.cms'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/reducers/cartSlice'

function Product(props) {

  const cartList = useSelector((state) => state.cartHandler.cart)

    const navigateTo = useNavigate()
    const dispatch = useDispatch()
    const [finalPrice, setFinalPrice] = useState(parseInt(props.product.price - ((props.product.offer / 100) * props.product.price)))
    const [ordered, setOrdered] = useState(false)

    function add(item) {
        dispatch(addToCart(item))
        console.log(cartList);
    }

    return (
        <div className='product'>
            <div className='productImageArea' onClick={() => {
                if (props.category != "Top Deals") {
                    navigateTo(`/description/${props.category}/${props.product.id}`)
                } else {
                    navigateTo(`/description/${props.product.category}/${props.product.id}`)
                    // console.log(props.product);
                }
            }}>
                <div className='offerBadge'>
                    <h5>{props.product.offer}%</h5>
                    <p>Off</p>
                </div>

                <div className={`dotOuter ${props.product.veg ? "vegOuter" : "nonVegOuter"}`}>
                    <div className={`dotInner ${props.product.veg ? "vegInner" : "nonVegInner"}`}>

                    </div>
                </div>

                <img src={props.product.image} />
            </div>
            <div className='productDetailsArea'>
                <h2 className='productName'>
                    {props.product.name}
                </h2>
                <h3 className='productPrice'>
                    Rs.{finalPrice}
                </h3>
                <p className='productMRP'>M.R.P <span className='productMRP-striked'>Rs.{props.product.price}</span ><span className='save'> You Save Rs.{props.product.price - finalPrice}</span></p>

                <button disabled={ordered} className='addToCartBtn' onClick={() => {
                    setOrdered(true)
                    add(props.product)
                }}>{!ordered ? "Add to Cart" : "Added"}&#8594;</button>
            </div>
        </div>
    )
}

export default Product;