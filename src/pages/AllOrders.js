import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './AllOrder.css'
function AllOrders() {

  const orders = [
    {
      id: "130",
      image: "https://img.freepik.com/premium-photo/full-frame-shot-red-bell-peppers-market-stall_1048944-9265708.jpg?w=740",
      title: "Fresh Capsicum - Red",
      qty: 2,
      orderedAt: "2024-06-12T10:30:00", // Assuming the order date/time is provided in ISO format
      paymentStatus: "Payment Done",
    },
    {
      id: "131",
      image: "https://img.freepik.com/premium-photo/green-fresh-broccoli-background-close-up-colored-table-vegetables-diet-healthy-eating-organic-food_79075-19147.jpg?w=900",
      title: "Fresho Broccoli",
      qty: 1,
      orderedAt: "2024-06-12T11:45:00",
      paymentStatus: "Payment Done",
    },
    {
      id: "132",
      image: "https://img.freepik.com/free-photo/raw-foodstuff-with-water-drops-studio_23-2151364841.jpg?t=st=1718003866~exp=1718007466~hmac=9831c356108b3b64ac19ec5cb46e41e9173808973c14b0d8425fa4d5fbe6e5b3&w=1060",
      title: "Fresho Carrot",
      qty: 3,
      orderedAt: "2024-06-12T13:20:00",
      paymentStatus: "Payment Done",
    },
    {
      id: "133",
      image: "https://img.freepik.com/premium-photo/full-frame-shot-tomatoes_1048944-18291200.jpg?w=740",
      title: "Fresho Tomato",
      qty: 1,
      orderedAt: "2024-06-12T15:10:00",
      paymentStatus: "Payment Done",
    },
    {
      id: "134",
      image: "https://img.freepik.com/premium-photo/shimeji-mushrooms-wicker-basket-wooden-table_29409-667.jpg?w=826",
      title: "Fresho Mushrooms",
      qty: 2,
      orderedAt: "2024-06-12T16:40:00",
      paymentStatus: "Payment Done",
    },
    {
      id: "135",
      image: "https://img.freepik.com/premium-photo/hand-holding-fresh-lettuce-leaves-with-blurred-background-lettuce-selection-text-space_174533-60350.jpg?w=900",
      title: "Fresho Lettuce",
      qty: 1,
      orderedAt: "2024-06-12T18:00:00",
      paymentStatus: "Payment Done",
    },
  ];


  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">All Orders</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">All Orders</li>
        </ol>
      </div>
      {/* Single Page Header End */}
      <div>
        <h2 className='py-5' style={{textAlign: "center"}}>Order Details</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product Image</th>
                <th scope="col">Title</th>
                <th scope="col">Quantity</th>
                <th scope="col">Ordered At</th>
                <th scope="col">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <motion.tr key={order.id} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: index * 0.2 }}>
                  <td>
                    <img src={order.image} alt={order.title} />
                  </td>
                  <td>{order.title}</td>
                  <td>{order.qty}</td>
                  <td>{order.orderedAt}</td>
                  <td>{order.paymentStatus}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllOrders;
