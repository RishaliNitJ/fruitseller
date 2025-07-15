import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import AboutUs from '../pages/AboutUs'

import SignUp from '../pages/SignUp'
import Login from '../pages/Login'

import ContactUs from '../pages/ContactUs'
import Cart from '../pages/Cart'
import Shop from '../pages/Shop'
import ShopDetails from '../pages/ShopDetails'
import Testimonial from '../pages/Testimonial'
import Checkout from '../pages/Checkout'
import Shop2 from '../pages/Shop2'
import Shop3 from '../pages/Shop3'
import Shop4 from '../pages/Shop4'
import Admin from '../pages/Admin'
import AllUsers from '../pages/AllUsers'
import AllOrders from '../pages/AllOrders'
import Messages from '../pages/Messages'
import OrderPlaced from '../pages/OrderPlaced'



const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "",
                element : <Home/>
            },
            {
                path : "about-us",
                element : <AboutUs/>
            },
            
            {
                path : "signup",
                element : <SignUp/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : "contact-us",
                element : <ContactUs/>
            },
            {
                path : "cart",
                element : <Cart/>
            },
            {
                path : "shop",
                element : <Shop/>
            },
            {
                path : "testimonial",
                element : <Testimonial/>
            },
            {
                path : "shopdetails",
                element : <ShopDetails/>
            },
            {
                path : "checkout",
                element : <Checkout/>
            },
            {
                path : "shop-2",
                element : <Shop2/>
            },
            {
                path : "shop-3",
                element : <Shop3/>
            },
            {
                path : "shop-4",
                element : <Shop4/>
            },
            {
                path : "admin",
                element : <Admin/>
            },
            {
                path : "all-users",
                element : <AllUsers/>
            },
            {
                path : "all-orders",
                element : <AllOrders/>
            },
            {
                path : "messages",
                element : <Messages/>
            },
            {
                path : "order-placed",
                element : <OrderPlaced/>
            }
            
        ]
    }
])


export default router