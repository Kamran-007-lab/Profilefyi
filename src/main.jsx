import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Checkout from './Components/Checkout.jsx'
import Hero from './Components/Hero.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Layout from './Components/Layout.jsx'

const router =createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Hero/>
    },
    {
      path: "checkout",
      element: <Checkout/>
    }
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
