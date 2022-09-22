import './Product.css'

import img from '../../assets/images/test.cms'

function Product() {
    return (
        <div className='product'>
            <div className='productImageArea'>
                <div className='offerBadge'>
                    <h5>20%</h5>
                    <p>Off</p>
                </div>
                <img src={img} />
            </div>
            <div className='productDetailsArea'>
                <h2>
                    Product name product name
                </h2>
                <h3>
                    Rs.100
                </h3>
                <p className='productMRP'>M.R.P <span className='productMRP-striked'>Rs.120</span ><span className='save'> You Save Rs.20</span></p>

                <button className='addToCartBtn'>Add to Cart &#8594;</button>
            </div>
        </div>
    )
}

export default Product;