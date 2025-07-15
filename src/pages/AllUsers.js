import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
function AllUsers() {

  // Dummy data for demonstration
  const users = [
    {
      index: 1,
      id: "1001",
      username: "john_doe",
      email: "john.doe@example.com",
      createdAt: "2024-06-12T10:30:00", // Assuming the creation date/time is provided in ISO format
    },
    {
      index: 2,
      id: "1002",
      username: "jane_smith",
      email: "jane.smith@example.com",
      createdAt: "2024-06-12T11:45:00",
    },
    {
      index: 3,
      id: "1003",
      username: "mike_jones",
      email: "mike.jones@example.com",
      createdAt: "2024-06-12T13:20:00",
    },
    {
      index: 4,
      id: "1004",
      username: "lisa_brown",
      email: "lisa.brown@example.com",
      createdAt: "2024-06-12T15:10:00",
    },
    {
      index: 5,
      id: "1005",
      username: "sam_wilson",
      email: "sam.wilson@example.com",
      createdAt: "2024-06-12T16:40:00",
    },
    {
      index: 6,
      id: "1006",
      username: "emily_clark",
      email: "emily.clark@example.com",
      createdAt: "2024-06-12T18:00:00",
    },
    {
      index: 7,
      id: "1007",
      username: "alex_carter",
      email: "alex.carter@example.com",
      createdAt: "2024-06-12T10:30:00",
    },
    {
      index: 8,
      id: "1008",
      username: "olivia_davis",
      email: "olivia.davis@example.com",
      createdAt: "2024-06-12T11:45:00",
    },
    {
      index: 9,
      id: "1009",
      username: "jacob_white",
      email: "jacob.white@example.com",
      createdAt: "2024-06-12T13:20:00",
    },
    {
      index: 10,
      id: "1010",
      username: "sophia_miller",
      email: "sophia.miller@example.com",
      createdAt: "2024-06-12T15:10:00",
    },
  ];

  return (
    <div>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">All Users</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Pages</Link>
          </li>
          <li className="breadcrumb-item active text-white">All Users</li>
        </ol>
      </div>
      {/* Single Page Header End */}

      <div>
        <h2 className='py-5' style={{textAlign: "center"}}>User Details</h2>
        <div className="table-responsive px-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Index</th>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <motion.tr key={user.id} initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                  <td>{user.index}</td>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AllUsers;
