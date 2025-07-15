// import React from 'react';
// import CartProduct from './CartProduct'; // Import the CartProduct component

// function ProductList({ products }) {
//   return (
//     <div className="table-responsive">
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Products</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Total</th>
//             <th scope="col">Handle</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <CartProduct 
//               key={product.id}
//               id={product.id}
//               image={product.image}
//               title={product.title}
//               price={product.price}
//               total={product.total}
//               hideButton={product.hideButton}
//             />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ProductList;