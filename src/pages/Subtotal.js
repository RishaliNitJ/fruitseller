import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import { getBasketTotal } from '../components/reducer';
import { useStateValue } from '../components/StateProvider';

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  const basketTotal = getBasketTotal(basket);
  const shippingCost = 20.00;
  const totalValue = basketTotal + shippingCost;

  return (
    <div>
      <div className="row g-4 justify-content-end">
        <div className="col-8" />
        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
          <div className="bg-light rounded">
            <div className="p-4">
              <h1 className="display-6 mb-4">
                Cart <span className="fw-normal">Total</span>
              </h1>
              <div className="d-flex justify-content-between mb-4">
                <h5 className="mb-0 me-4">Subtotal:</h5>
                <CurrencyFormat
                  value={basketTotal}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₹'}
                  renderText={(value) => <p className="mb-0">{value}</p>}
                />
              </div>
              <div className="d-flex justify-content-between">
                <h5 className="mb-0 me-4">Shipping</h5>
                <div className="">
                  <p className="mb-0">Flat rate: ₹{shippingCost.toFixed(2)}</p>
                </div>
              </div>
              <p className="mb-0 text-end">Shipping to India.</p>
            </div>
            <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
              <h5 className="mb-0 ps-4 me-4">Total</h5>
              <CurrencyFormat
                value={totalValue}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'₹'}
                renderText={(value) => <p className="mb-0 pe-4">{value}</p>}
              />
            </div>
            <button
              className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4"
              type="button"
              onClick={() => navigate('/checkout')}
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subtotal;
