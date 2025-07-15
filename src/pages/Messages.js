import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
function Messages() {
  const messages = [
    {
      name: "John Wick",
      email: "john.doe@example.com",
      message: "Hi there, I have a question about your product. Can you please provide more information?"
    },
    {
      name: "Will Smith",
      email: "jane.smith@example.com",
      message: "Hello, I recently purchased your product and I'm quite satisfied with it. Thank you!"
    },
    {
      name: "Mike Tyson",
      email: "mike.johnson@example.com",
      message: "Hey, I encountered an issue with your service. Could you please assist me in resolving it?"
    },
  ];
  

  // Dummy data for replies
  const replies = [
    {
      name: "Milla Doe",
      email: "Milla.doe@example.com",
      review: "Excellent service!",
      rating: 5
    },
    {
      name: "nina sancho",
      email: "nina.sancho@example.com",
      review: "Good product quality.",
      rating: 4
    },
    {
      name: "Bruno frenandes",
      email: "b.frenandes@example.com",
      review: "Could be better.",
      rating: 3
    },
  ];

  return (
    <div>
    {/* Single Page Header start */}
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">Messages and Replies</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/">Pages</Link>
        </li>
        <li className="breadcrumb-item active text-white">Messages and Replies</li>
      </ol>
    </div>
    {/* Single Page Header End */}

    {/* Messages Table */}
    <div>
      <h2 className='py-5' style={{textAlign: "center"}}>User Messages</h2>
      <div className="table-responsive px-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ duration: 1 }}>
                <td>{message.name}</td>
                <td>{message.email}</td>
                <td>{message.message}</td>
                </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Replies Table */}
    <div>
      <h2 className='py-5' style={{textAlign: "center"}}>User Replies</h2>
      <div className="table-responsive px-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Review</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {replies.map((reply, index) => (
              <motion.tr key={index} initial={{ opacity: 0 }} animate={{ opacity: 2 }} transition={{ duration: 1 }}>
                <td>{reply.name}</td>
                <td>{reply.email}</td>
                <td>{reply.review}</td>
                <td>{reply.rating}</td>
                </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Messages
