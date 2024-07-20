import React,{useState,useEffect} from 'react';
import '../index.css';
import GridItem from './Griditem'; // Import the GridItem component

export default function Getproducts (){
const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/products'); // Replace with your actual endpoint
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, []);
return(

  <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Your Grid Title</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <GridItem key={product._id} product={product} />
        ))}
      </div>
    </div>
);
}