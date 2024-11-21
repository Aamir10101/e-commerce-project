
import Image from 'next/image';
import Link from 'next/link';
import './homePage.css';



export default function HomePage() {
  return (
    <div>
      
      <div className="hero-section">
        <center>
          <h1 className='font-bold'>Welcome to AA Outfits</h1>
          <h2 className='font-bold'>Wear Your Attitude</h2>
        </center>
      </div>
       {/* Product Section */}
       <div className="product-section">
        <h2 className="section-title">Please visit our products</h2>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <Image src="/p1.jpg" alt="Product 1" width={300} height={200} />
            <h3>Product Name 1</h3>
            <p>Product description goes here. This is an amazing outfit!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* Product 2 */}
          <div className="product-card">
            <Image src="/p2.jpg" alt="Product 2" width={300} height={200} />
            <h3>Product Name 2</h3>
            <p>Product description goes here. Look stylish with this product!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* Product 3 */}
          <div className="product-card">
            <Image src="/p3.jpg" alt="Product 3" width={300} height={200} />
            <h3>Product Name 3</h3>
            <p>Product description goes here. A must-have in your wardrobe!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* Product 4 */}
          <div className="product-card">
            <Image src="/p4.jpg" alt="Product 4" width={300} height={200} />
            <h3>Product Name 4</h3>
            <p>Product description goes here. Trendy and comfortable!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          {/* Product 5 */}
          <div className="product-card">
            <Image src="/p5.jpg" alt="Product 5" width={300} height={200} />
            <h3>Product Name 5</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
           {/* Product 6 */}
           <div className="product-card">
            <Image src="/p6.jpg" alt="Product 6" width={300} height={200} />
            <h3>Product Name 6</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
           {/* Product 7 */}
           <div className="product-card">
            <Image src="/p7.jpg" alt="Product 7" width={300} height={200} />
            <h3>Product Name 7</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 8 */}
          <div className="product-card">
            <Image src="/p8.jpg" alt="Product 8" width={300} height={200} />
            <h3>Product Name 8</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 9 */}
          <div className="product-card">
            <Image src="/p9.jpg" alt="Product 9" width={300} height={200} />
            <h3>Product Name 9</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 10 */}
          <div className="product-card">
            <Image src="/p10.jpg" alt="Product 10" width={300} height={200} />
            <h3>Product Name 10</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 11 */}
          <div className="product-card">
            <Image src="/p11.jpg" alt="Product 11" width={300} height={200} />
            <h3>Product Name 11</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 12 */}
          <div className="product-card">
            <Image src="/p12.jpg" alt="Product 12" width={300} height={200} />
            <h3>Product Name 12</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 13 */}
          <div className="product-card">
            <Image src="/p13.jpg" alt="Product 13" width={300} height={200} />
            <h3>Product Name 13</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 14 */}
          <div className="product-card">
            <Image src="/p14.jpg" alt="Product 14" width={300} height={200} />
            <h3>Product Name 14</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         
          {/* Product 15 */}
          <div className="product-card">
            <Image src="/p15.jpg" alt="Product 15" width={300} height={200} />
            <h3>Product Name 15</h3>
            <p>Product description goes here. Fashion meets comfort!</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
         

         
          {/* Add more products as necessary */}
        </div>
      </div>
      <div>
     <center><Link href="/product">
 <button>Visit more product</button>
</Link></center> 

    
      </div>
    </div>
  );
}
