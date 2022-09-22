import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className='productImageArea'>

            </div>
            <div className='productDetailsArea'>
                <h2>
                    Product Name
                </h2>
                <h3>
                    Rs.100
                </h3>
                <p className='productMRP'>M.R.P Rs.120</p>
                <h5 className='save'>You Save Rs.20</h5>

                <button className='addToCartBtn'>Add to Cart &#8594;</button>
            </div>
        </div>
    )
}

export default Product;