import React, { useState } from 'react';
import '../index.css';

export default function Productsimp() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [mrp, setMrp] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('http://localhost:3000/admin/podt/products', { // Replace with your actual backend endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: productId,productId, productName, mrp, description }), // Map form fields to request body
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      
      console.log('Data submitted successfully!');
      setProductId(''); // Clear form inputs after successful submission
      setProductName('');
      setMrp('');
      setDescription('');
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="pt-2 ml-2">
              Product Id:
              <input
                className="ml-4 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pt-2 ml-2">
              Product Name:
              <input
                className="ml-4 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pt-2 ml-2">
              Mrp:
              <input
                className="ml-4 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="number"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="pt-2 ml-2">
              Description:
              <input
                className="ml-4 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <button className="pt-2 ml-2" type="submit">
            Submit
          </button>
        </div>
        <button><a href="/admin/" >Admin Page</a></button> 
      </form>
    </div>
  );
}
