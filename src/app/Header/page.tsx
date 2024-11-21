import Link from 'next/link';
import Image from 'next/image';
import './header.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <Image src="/image.png" alt="brandlogo" width={50} height={50} />
        </Link>
        <Link href="/">AA Outfits</Link>
      </div>
      <ul className="nav-link">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
        <li><Link href="/service">Our Service</Link></li>
        <li><Link href="/product">Product</Link></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search your outfits" />
      </div>

    </nav>
  );
};

export default Navbar;
