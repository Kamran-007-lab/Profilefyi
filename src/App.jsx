import { useState } from 'react'
import './App.css'
import Hero from './Components/Hero.jsx'
import Checkout from './Components/Checkout.jsx'
import Navbar from './Components/Navbar.jsx'
import MobNavbar from './Components/MobNavbar.jsx'
import { Cartprovider } from './contexts/CartContext.js'

function App() {
  const [items,setItems]=useState([])
  const [sum,setSum]=useState(0)

  const addItem =(item) => {
    setItems((prev)=>[...prev,item])
  }

  const updateItem =(id,quantity) => {
    const tmp = items.find((tmp) => tmp.id ===id)
    const newProduct = {...tmp,quantity:quantity+tmp.quantity }
    setItems((prev)=>prev.map((prevItem)=> (prevItem.id===id ? newProduct: prevItem)))
    console.log(items)
  }

  const removeItem=(id)=>{
    setItems((prev) => prev.filter((prevItem) => prevItem.id!==id))
  }

  const total=(items)=>{
    let s=0
    items.forEach((i)=>{
      s+=i.quantity*i.price
    })
    setSum(s);
    return s;
  }

  return (
    <>
    <Cartprovider value={{sum,items,addItem,updateItem,removeItem,total}}>
    <Navbar/>
    <MobNavbar/>
    <Checkout/>
    {/* <Hero/> */}
    </Cartprovider>
    </>
  )
}

export default App
