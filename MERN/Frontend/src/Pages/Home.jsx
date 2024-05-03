import React, { useState } from 'react';
import {HomeBanner,CategoryCard, ProductCard, Special } from '../Components';
import {asset25,asset26,asset27} from "../assets"
const Home = () => {
  const [category,setCategory]=useState([{
    title:"Mens",
    image:asset25,
    description:'All About Mens Wear'
  },
  {
    title:"Women",
    image:asset26,
    description:'All About Women Wear'
  },
  {
    title:"Kids",
    image:asset27,
    description:'All About Kids Wear'
  },
  ])

  const [product,setProduct]=useState([{
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Women Luxury Shoes",
    category:'Women',
    image:asset25,
    price:1999,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },

  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Women Luxury Shoes",
    category:'Women',
    image:asset25,
    price:1999,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset25,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
 
  ])
  return (
    <>
    <HomeBanner/>  
    <CategoryCard data={category}/>
    <ProductCard data={product}/>
    <Special/>
    </>  
  )
}

export default Home