import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Categories from '../../components/CategoriesSection'
import Card from '../../components/Card'
import Navbar from '../../components/navbar'
import Footer from '../../components/Footer'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((res) => {
                setProducts(res.products)
            })
    }, [])
    return (
        <div className=''>
            <Navbar/>
            <Banner />
            <Categories />
            <div className='max-w-[1400px] mt-20'>
                <div className='flex flex-wrap justify-center gap-6'>

                    {
                        products.map((product) => (
                            <Card brand={product.brand} category={product.category} desc={product.description} id={product.id} images={product.images} price={product.price} rating={product.rating} thumbnail={product.thumbnail} title={product.title} />

                        ))
                    }
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Home