import React from 'react'
import Lottie from 'lottie-react';
import animate from '../img/cart-empty.json'
import veg1 from '../img/vegetable-item-1.jpg';
import veg2 from '../img/vegetable-item-2.jpg';
import veg3 from '../img/vegetable-item-3.png';
import veg4 from '../img/vegetable-item-4.jpg';
import veg5 from '../img/vegetable-item-5.jpg';
import veg6 from '../img/vegetable-item-6.jpg';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { useStateValue } from '../components/StateProvider';
import Subtotal from './Subtotal';
import { motion } from "framer-motion";


function Cart() {

    const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <>
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Cart</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/">Pages</Link>
      </li>
      <li className="breadcrumb-item active text-white">Cart</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Cart Page Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div>
  <h2>Your Shopping Cart</h2>
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Products</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      {basket.length ? (
          basket.map(item => (
            <CartProduct
              key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
            <Lottie className='json-data' animationData={animate}/>
        )}
      </tbody>
    </table>
  </div>
</div>

      <div className="mt-5">
        <input
          type="text"
          className="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
        />
        <button
          className="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
        >
          Apply Coupon
        </button>
      </div>
     <Subtotal/>
    </div>
  </div>
  {/* Cart Page End */}
</>

    </div>
  )
}

export default Cart
