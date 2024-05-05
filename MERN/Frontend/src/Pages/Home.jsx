import React, { useState } from 'react';
import {HomeBanner,CategoryCard, ProductCard, Special } from '../Components';
import {asset25,asset26,asset27,asset9,asset10,asset11,asset12,asset13,asset14,asset15,asset16,asset17} from "../assets";
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
    image:asset9,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset10,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Women Luxury Shoes",
    category:'Women',
    image:asset11,
    price:1999,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset12,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },

  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset13,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset14,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Women Luxury Shoes",
    category:'Women',
    image:asset15,
    price:1999,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset16,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Mens Luxury Shoes",
    category:'Mens',
    image:asset17,
    price:2000,
    description:'All About Mens Wear',
    rating:3.5,
  },
  {
    title:"Women Luxury Shoes",
    category:'Women',
    image:asset15,
    price:2999,
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