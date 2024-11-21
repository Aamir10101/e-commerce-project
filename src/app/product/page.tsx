// import React from 'react';
// import './product.css';

// export default function ProductsPage() {
//   return (
//     <div className="products-container">
//       {Array.from({ length: 25 }).map((_, index) => (
//         <div key={index} className="product-card">
//           <img src="https://via.placeholder.com/150" alt={`Product ${index + 1}`} />
//           <h3>Product {index + 1}</h3>
//           <p>Description of Product {index + 1}</p>
//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from 'react';
import './product.css';
import Image from 'next/image';
export default function ProductsPage() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', image: '/p21.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', image: '/p22.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', image: '/p23.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', image: '/p23.jpg' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', image: '/p24.jpg' },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', image: '/p25.jpg' },
    { id: 7, name: 'Product 7', description: 'Description of Product 7', image: '/p26.jpg' },
    { id: 8, name: 'Product 8', description: 'Description of Product 8', image: '/p27.jpg' },
    { id: 9, name: 'Product 9', description: 'Description of Product 9', image: '/p28.jpg' },
    { id: 10, name: 'Product 10', description: 'Description of Product 10', image: '/p29.jpg' },
    { id: 11, name: 'Product 11', description: 'Description of Product 11', image: '/p30.jpg' },
    { id: 12, name: 'Product 12', description: 'Description of Product 12', image: '/p31.jpg' },
    { id: 13, name: 'Product 13', description: 'Description of Product 13', image: '/p32.jpg' },
    { id: 14, name: 'Product 14', description: 'Description of Product 14', image: '/p33.jpg' },
    // 20 aur products ka data yahan add kar sakte ho.
  ];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Image src={product.image} alt={"product.name"} width= {100} height= {100} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

