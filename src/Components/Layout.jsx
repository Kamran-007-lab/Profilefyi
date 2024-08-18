import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import MobNavbar from './MobNavbar'
import { Outlet } from 'react-router-dom'
import { Cartprovider } from '../contexts/CartContext.js'

function Layout() {
    const [items,setItems]=useState([])
  
    const addItem =(item) => {
      setItems((prev)=>[...prev,item])
    }
  
    const updateItem =(id,quantity) => {
      const tmp = items.find((tmp) => tmp.id ===id)
      const newProduct = {...tmp,quantity:quantity+tmp.quantity }
      setItems((prev)=>prev.map((prevItem)=> (prevItem.id===id ? newProduct: prevItem)))
    }
  
    const removeItem=(id)=>{
      setItems((prev) => prev.filter((prevItem) => prevItem.id!==id))
    }
  
    const total=(items)=>{
      let s=0
      items.forEach((i)=>{
        s+=i.quantity*i.price
      })
      return s.toFixed(2);;
    }

  return (
    <>
    <Cartprovider value={{items,addItem,updateItem,removeItem,total}}>
    <Navbar/>
    <MobNavbar/>
    <Outlet/>
    </Cartprovider>
      
    </>
  )
}

export default Layout
