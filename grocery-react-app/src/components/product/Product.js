import './Product.css'

import img from '../../assets/images/test.cms'

import { useNavigate } from 'react-router-dom'

function Product(props) {

    const navigateTo = useNavigate()

    let finalPrice = parseInt(props.product.price - ((props.product.offer / 100) * props.product.price))

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

                <button className='addToCartBtn'>Add to Cart &#8594;</button>
            </div>
        </div>
    )
}

export default Product;