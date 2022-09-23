import './Product.css'

import img from '../../assets/images/test.cms'

import { useNavigate } from 'react-router-dom'

function Product(props) {

    const navigateTo = useNavigate()

    let finalPrice = parseInt(props.product.price-((props.product.offer/100)*props.product.price))

    return (
        <div className='product'>
            <div className='productImageArea' onClick={()=>{
                navigateTo(`/description/${props.catagory}/${props.product.id}`)
            }}>
                <div className='offerBadge'>
                    <h5>{props.product.offer}%</h5>
                    <p>Off</p>
                </div>
                <img src={img} />
            </div>
            <div className='productDetailsArea'>
                <h2>
                    {props.product.name}
                </h2>
                <h3>
                    Rs.{finalPrice}
                </h3>
                <p className='productMRP'>M.R.P <span className='productMRP-striked'>Rs.{props.product.price}</span ><span className='save'> You Save Rs.{props.product.price - finalPrice}</span></p>

                <button className='addToCartBtn'>Add to Cart &#8594;</button>
            </div>
        </div>
    )
}

export default Product;