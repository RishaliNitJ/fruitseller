import React from 'react';
import { useStateValue } from '../components/StateProvider';
import { motion } from "framer-motion";

function CartProduct({ id, image, title, price, total, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  const increaseQty = () => {
    dispatch({
      type: "INCREASE_QTY",
      payload: id,
    });
  };

  const decreaseQty = () => {
    dispatch({
      type: "DECREASE_QTY",
      payload: id,
    });
  };

  const item = basket.find((item) => item.id === id);

  return (
    <motion.tr initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
      <th scope="row">
        <div className="d-flex align-items-center">
          <img
            src={image}
            className="img-fluid me-5 rounded-circle"
            style={{ width: 80, height: 80 }}
            alt={title}
          />
        </div>
      </th>
      <td>
        <p className="mb-0 mt-4">{title}</p>
      </td>
      <td>
        <p className="mb-0 mt-4">{price}</p>
      </td>
      <td>
        <div className="input-group quantity mt-4" style={{ width: 100 }}>
          <div className="input-group-btn">
            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={decreaseQty}>
              <i className="fa fa-minus" />
            </button>
          </div>
          <input
            type="text"
            className="form-control form-control-sm text-center border-0"
            value={item?.qty || 1}
            readOnly
          />
          <div className="input-group-btn">
            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={increaseQty}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </td>
      <td>
        <p className="mb-0 mt-4">{item?.total}</p>
      </td>
      <td>
        {!hideButton && (
          <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={removeFromCart}>
            <i className="fa fa-times text-danger" />
          </button>
        )}
      </td>
    </motion.tr>
  );
}

export default CartProduct;
