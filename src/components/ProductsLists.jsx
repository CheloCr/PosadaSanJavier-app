
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import {popularDishes} from "../generalData"
import SingleProduct from './SingleProduct'

import axios from "axios"



const Container = styled.div ` 
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


const ProductsLists = ({cat,filters}) => {
  

  const [products,setProducts] = useState([])
  const [filterdProducts,setFilteredProducts] = useState([])

   useEffect(() => {
      const getPorducts = async () => {
        console.log("ENTRANDO AL GER PRODUCTS")
        try {
          const res = await axios.get( 
            cat 
            ? `http://localhost:5000/api/products?category=${cat}` 
            : "http://localhost:5000/api/products" )
          
            setProducts(res.data)
            
        } catch (error) {
          
        }
      }
      getPorducts()
   },[cat])

   useEffect(() => {
    cat && 
    setFilteredProducts(
      products.filter((item) => Object.entries(filters).every(([key,value]) => 
        item[key].includes(value)
      ) )
    )
   },[products,cat,filters])

  return (
    <Container>
       {cat
        ? filterdProducts.map((item) => <SingleProduct item={item} key={item.id} />)
        : products
            .slice(0, 7)
            .map((item) => <SingleProduct item={item} key={item.id} />)}
    </Container>
  )
}

export default ProductsLists