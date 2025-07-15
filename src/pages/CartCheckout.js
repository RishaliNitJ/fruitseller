import React from 'react';
import { useStateValue } from '../components/StateProvider';

function CartCheckout({ id, image, title, price, total }) {
    const [{ basket }, dispatch] = useStateValue();


    const item = basket.find((item) => item.id === id);

    return (
        <>
            <tr>
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
                        <input
                            type="text"
                            className="form-control form-control-sm text-center border-0"
                            value={item?.qty || 1}
                            readOnly
                        />
                        
                    </div>
                </td>
                <td>
                    <p className="mb-0 mt-4">{item?.total}</p>
                </td> 
           </tr>
        </>
    );
}

export default CartCheckout;
