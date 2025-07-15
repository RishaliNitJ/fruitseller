import React from 'react'
import veg1 from '../img/vegetable-item-1.jpg';
import veg2 from '../img/vegetable-item-2.jpg';
import veg3 from '../img/vegetable-item-3.png';
import veg4 from '../img/vegetable-item-4.jpg';
import veg5 from '../img/vegetable-item-5.jpg';
import veg6 from '../img/vegetable-item-6.jpg';
import { Link, useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

import CartProduct from './CartProduct';
import { useStateValue } from '../components/StateProvider';
import Subtotal from './Subtotal';
import CartCheckout from './CartCheckout';
import { getBasketTotal } from '../components/reducer';

function Checkout() {

  const [{ basket }, dispatch] = useStateValue();
  const basketTotal = getBasketTotal(basket);
  const shippingCost = 20.00;
  const totalValue = basketTotal + shippingCost;
  const navigate = useNavigate();

const handlePlaceOrder = ()=>{
  dispatch({
    type: "EMPTY_BASKET",
    
  });
  navigate("/order-placed");
}

  return (
    <div>
      <>
  {/* Single Page Header start */}
  <div className="container-fluid page-header py-5">
    <h1 className="text-center text-white display-6">Checkout</h1>
    <ol className="breadcrumb justify-content-center mb-0">
      <li className="breadcrumb-item">
        <Link to="/">Home</Link>
      </li>
      <li className="breadcrumb-item">
        <Link to="/">Pages</Link>
      </li>
      <li className="breadcrumb-item active text-white">Checkout</li>
    </ol>
  </div>
  {/* Single Page Header End */}
  {/* Checkout Page Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <h1 className="mb-4">Billing details</h1>
      <form action="#">
        <div className="row g-5">
          <div className="col-md-12 col-lg-6 col-xl-7 px-3">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="form-item w-100">
                  <label className="form-label my-3">
                    First Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="form-item w-100">
                  <label className="form-label my-3">
                    Last Name<sup>*</sup>
                  </label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Company Name<sup>*</sup>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Address <sup>*</sup>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="House Number Street Name"
              />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Town/City<sup>*</sup>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Country<sup>*</sup>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Postcode/Zip<sup>*</sup>
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Mobile<sup>*</sup>
              </label>
              <input type="tel" className="form-control" />
            </div>
            <div className="form-item">
              <label className="form-label my-3">
                Email Address<sup>*</sup>
              </label>
              <input type="email" className="form-control" />
            </div>
            <div className="form-check my-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="Account-1"
                name="Accounts"
                defaultValue="Accounts"
              />
              <label className="form-check-label" htmlFor="Account-1">
                Create an account?
              </label>
            </div>
            <hr />
            <div className="form-check my-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="Address-1"
                name="Address"
                defaultValue="Address"
              />
              <label className="form-check-label" htmlFor="Address-1">
                Ship to a different address?
              </label>
            </div>
            <div className="form-item">
              <textarea
                name="text"
                className="form-control"
                spellCheck="false"
                cols={30}
                rows={11}
                placeholder="Oreder Notes (Optional)"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 col-xl-5 px-3">
            <div className="table-responsive ">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                {basket.length ? (
          basket.map(item => (
            <CartCheckout
              key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
            <p>Cart empty</p>
        )}
                  <tr>
                    <th scope="row"></th>
                    <td className="py-5" />
                    <td className="py-5" />
                    <td className="py-5">
                      <p className="mb-0 text-dark py-3">Subtotal</p>
                    </td>
                    <CurrencyFormat
                  value={basketTotal}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                  renderText={(value) => <td className="py-5">
                    <div className="py-3 border-bottom border-top">
                      <p className="mb-0 text-dark">{value}</p>
                    </div>
                  </td>}
                />
                 
                  </tr>
                 

                  <tr>
                  <div className="d-flex justify-content-between">
                <h5 className="mb-0 me-4">Shipping</h5>
                <div className="">
                  <p className="mb-0">Flat rate: ₹{shippingCost.toFixed(2)}</p>
                </div>
              </div>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    
                    <td className="py-5">
                      <p className="mb-0 text-dark text-uppercase py-3">
                        TOTAL
                      </p>
                    </td>
                    <td className="py-5" />
                    <td className="py-5" />
                    <CurrencyFormat
                value={totalValue}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
                renderText={(value) => <td className="py-5">
                  <div className="py-3 border-bottom border-top">
                    <p className="mb-0 text-dark">{value}</p>
                  </div>
                </td>}
              />
                    
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div className="col-12">
                <div className="form-check text-start my-3">
                  <input
                    type="radio"
                    className="form-check-input bg-primary border-0"
                    id="Transfer-1"
                    name="Payments"
                    defaultValue="Transfer"
                  />
                  <label className="form-check-label" htmlFor="Transfer-1">
                    Direct Bank Transfer
                  </label>
                </div>
                <p className="text-start text-dark">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div className="col-12">
                <div className="form-check text-start my-3">
                  <input
                    type="radio"
                    className="form-check-input bg-primary border-0"
                    id="Payments-1"
                    name="Payments"
                    defaultValue="Payments"
                  />
                  <label className="form-check-label" htmlFor="Payments-1">
                    Check Payments
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div className="col-12">
                <div className="form-check text-start my-3">
                  <input
                    type="radio"
                    className="form-check-input bg-primary border-0"
                    id="Delivery-1"
                    name="Payments"
                    defaultValue="Delivery"
                  />
                  <label className="form-check-label" htmlFor="Delivery-1">
                    Cash On Delivery
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
              <div className="col-12">
                <div className="form-check text-start my-3">
                  <input
                    type="radio"
                    className="form-check-input bg-primary border-0"
                    id="Paypal-1"
                    name="Payments"
                    defaultValue="Paypal"
                  />
                  <label className="form-check-label" htmlFor="Paypal-1">
                    Paypal
                  </label>
                </div>
              </div>
            </div>
            <div className="row g-4 text-center align-items-center justify-content-center pt-4">
              <button
                type="button"
                className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  {/* Checkout Page End */}
</>

    </div>
  )
}

export default Checkout
