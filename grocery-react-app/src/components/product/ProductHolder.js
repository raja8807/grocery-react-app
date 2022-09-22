import './ProductHolder.css'

import Product from './Product'

function ProductHolder() {
    return (
        <div className='ProductHolder'>
            <div className='container'>
                <div className='ProductHolderWrapper'>
<Product></Product>
<Product></Product>
<Product></Product>
<Product></Product>
                </div>
            </div>
        </div>
    )
}

export default ProductHolder;