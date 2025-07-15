import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react';
import animate from '../img/placed.json'


function OrderPlaced() {
  return (
    <div>
       {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Order Placed</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/">Pages</Link>
      </li>
      <li className="breadcrumb-item active text-white">Order Placed</li>
    </ol>
  </div>
  {/* Single Page Header End */}

  <div>
  <Link to="/">
  <Lottie
                              className='json-data'
                              style={{ width: "1180px", height: "440px", "padding-left": "440px"}}
                              animationData={animate}
                            />
  </Link>
  </div>
    </div>
  )
}

export default OrderPlaced
