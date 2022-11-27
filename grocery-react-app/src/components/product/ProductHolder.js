import './ProductHolder.css'
import loading from '../../assets/loading.gif'

import Product from './Product'
import CategoryHolder from '../category/CategoryHolder';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductHolder(props) {

    const navigateTo = useNavigate()

    let params = useParams()

    const [products, setProducts] = useState([])
    const [isAscActive, setAscActive] = useState(true)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setAscActive(true)
        fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-' + params.category + "/" + params.category).then((response) => {
        // fetch('http://localhost:5000/api').then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                navigateTo('/*')
            }

        }).then((data) => {
            console.log(data)
            if (data) {
                data.forEach((item) => {
                    item.finalPrice = item.price - ((item.offer / 100) * item.price)
                })

                setProducts(data.sort((a, b) => {
                    return a.finalPrice - b.finalPrice
                }))

                setIsLoading(false)

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

    function search(e) {
        setIsLoading(true)

        let x = e.target.value
        fetch('https://my-json-server.typicode.com/raja8807/grocery-app-data-' + params.category + "/" + params.category).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return false
        }).then((data) => {
            if (data) {
                data.forEach((item) => {
                    item.finalPrice = parseInt(item.price - ((item.offer / 100) * item.price))
                })

                setProducts(data.filter((item) => {
                    return item.name.toLowerCase().includes(x)
                }))


                if (isAscActive) {
                    setProducts((prev) => {
                        return prev.sort((a, b) => {
                            return a.finalPrice - b.finalPrice
                        })
                    })
                } else {
                    setProducts((prev) => {
                        return prev.sort((a, b) => {
                            return b.finalPrice - a.finalPrice
                        })
                    })
                }
                setIsLoading(false)
            }


        })
    }

    return (
        <div className='ProductHolder'>
            <CategoryHolder />
            <div className='container'>
                <h2 className='sectionHeading'>{params.category}</h2>

                <div className='filterWrapper'>

                    <div className='searchBar' id='filterSearch'>
                        <i className="fa fa-search"></i>
                        <input className='searchBox' placeholder='Search..' type='search' onChange={(e) => {
                            search(e)
                        }} />
                    </div>

                    {
                        !isLoading && (products.length == 0 ? <h4 className='productLength' id='error'>Nothing To Show</h4> : <h4 className='productLength'>Showing {products.length} products</h4>)
                    }

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
                        isLoading ?
                            <img src={loading} /> :
                            products.map((item) => {
                                return <Product key={Math.random()} product={item} category={params.category} setCartList={props.setCartList} />
                            })
                    }
                    {/* <Product/> */}
                </div>
            </div>
        </div>
    )
}

export default ProductHolder;