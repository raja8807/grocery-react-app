import './ProductHolder.css'

import Product from './Product'

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductHolder() {
    let params = useParams()
    const [products, setProducts] = useState([])
    const [isAscActive, setAscActive] = useState(true)
    // const [currentcategory,setcategory] = useState(category)

    useEffect(() => {
        setAscActive(true)
        fetch('https://my-json-server.typicode.com/raja8807/grocery-react-app/' + params.category).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((data) => {
            if (data) {
                data.forEach((item) => {
                    item.finalPrice = item.price - ((item.offer / 100) * item.price)
                })

                setProducts(data.sort((a, b) => {
                    return a.finalPrice - b.finalPrice
                }))
            }
        })
    }, [params])

    function sortAsc() {
        if (!isAscActive) {
            setProducts((prev) => {
                return prev.sort((a, b) => {
                    return a.finalPrice - b.finalPrice
                })
            })
            setAscActive(true)
        }
    }

    function sortDesc() {
        if (isAscActive) {
            setProducts((prev) => {
                return prev.sort((a, b) => {
                    return b.finalPrice - a.finalPrice
                })
            })
            setAscActive(false)
        }
    }

    return (
        <div className='ProductHolder'>
            <div className='container'>
                <h2 className='sectionHeading'>{params.category}</h2>

                <div className='filterWrapper'>

                    <div className='searchBar' id='filterSearch'>
                        <i className="fa fa-search"></i>
                        <input className='searchBox' placeholder='Search..' type='search' />
                    </div>

                    <div className='sortWrapper'>
                        <div className={`sortBtn ${isAscActive && "sortActive"}`} onClick={() => {
                            sortAsc()
                        }}>Low To High <i className="fa fa-sort-asc"> </i></div>

                        <div className={`sortBtn ${!isAscActive && "sortActive"}`} onClick={() => {
                            sortDesc()
                        }}>High To Low <i className="fa fa-sort-desc"> </i></div>
                    </div>

                </div>

                <div className='ProductHolderWrapper'>
                    {
                        products.map((item) => {
                            return <Product key={Math.random()} product={item} category={params.category} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductHolder;