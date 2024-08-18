import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Checkout from './Components/Checkout.jsx'
import Hero, {heroLoader} from './Components/Hero.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './Components/Layout.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route 
    loader={heroLoader}
    path='' element={<Hero/>}/>
    <Route path='checkout' element={<Checkout/>}/>

    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
