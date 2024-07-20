import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    //const navigate=useNavigate(); 
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      alert('Clicked!');  // Add this line to test the function
      setIsOpen(!isOpen);
    };
    return(
      <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-white text-xl font-bold">Sravan</a>
          <div className="hidden sm:flex items-center space-x-4">
            <a href="/admin/products" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">Home</a>
            <a href="/about" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">About</a>
            <a href="/admin/" className="text-white px-3 py-2 rounded-md hover:bg-gray-700">Admin</a>
          </div>
          <div className="flex items-center sm:hidden">
          <button type="button" onClick={toggleMenu} className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
  {/* Add a hamburger menu icon or button here */}
  <script>console.error('hamburger');</script>
  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
  </svg>
</button>
          </div>
        </div>

        {/* Mobile Menu (Visible only when isOpen is true) */}
        <div className={`sm:hidden absolute top-full left-0 w-full bg-gray-800 z-50 transition duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-4 py-6 space-y-2">
            <a href="/admin/products" className="text-white px-3 py-2 rounded-md hover:bg-gray-700 block">Home</a>
            <a href="/about" className="text-white px-3 py-2 rounded-md hover:bg-gray-700 block">About</a>
            <a href="/admin/" className="text-white px-3 py-2 rounded-md hover:bg-gray-700 block">Admin</a>
          </div>
        </div>
      </div>
    </nav>
    )
}

