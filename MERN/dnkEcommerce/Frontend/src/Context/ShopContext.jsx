import React, { createContext, useState } from "react";
export const ShopContext = createContext(null);
import {asset9,asset10,asset11,asset12,asset13,asset14,asset15,asset16,asset17} from "../assets";
const ShopContextProvider = ({ children }) => {

     const [products,setProducts]=useState([{
        id:1,
        title:"Kids Luxury Shoes",
        category:'Kids',
        image:asset9,
        price:2000,
        description:'All About Kids Wear',
        rating:3.5,
      },
      {
        id:2,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset10,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:3,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset11,
        price:1999,
        description:'All About Women Wear',
        rating:3.5,
      },
      {
        id:4,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset12,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
    
      {
        id:5,
        title:"Kids Luxury Shoes",
        category:'Kids',
        image:asset13,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:6,
        title:"Kids Luxury Shoes",
        category:'Kid',
        image:asset14,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:7,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset15,
        price:1999,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:8,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset16,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:9,
        title:"Mens Luxury Shoes",
        category:'Men',
        image:asset17,
        price:2000,
        description:'All About Mens Wear',
        rating:3.5,
      },
      {
        id:10,
        title:"Women Luxury Shoes",
        category:'Women',
        image:asset15,
        price:2999,
        description:'All About Mens Wear',
        rating:3.5,
      },
     
      ])
    return (
        <ShopContext.Provider value={{products}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;