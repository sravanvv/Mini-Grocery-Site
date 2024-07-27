import React, { useState, useEffect } from 'react';
import '../index.css';

export default function Productsdelete() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [mrp, setMrp] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch all products for the dropdown
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/admin/products');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError('Failed to fetch product details');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  };

  // Fetch product details when a product is selected from the dropdown
  const handleProductChange = async (event) => {
    const selectedId = event.target.value;
    setProductId(selectedId);
    setSelectedProductId(selectedId);

    if (selectedId) {
      try {
        const response = await fetch(`http://localhost:3000/admin/products/${selectedId}`);
        if (!response.ok) throw new Error('Failed to fetch product details');
        const product = await response.json();
        setProductName(product.productName || '');
        setMrp(product.mrp || '');
        setDescription(product.description || '');
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Error fetching product details:', error);
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
          }, 3000);
      }
    } else {
      // Clear form if no product ID is selected
      setProductName('');
      setMrp('');
      setDescription('');
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (event) => {
    event.preventDefault();
    if (!productId) {
      console.error('Please provide a product ID to delete');
      setError('Please provide a product ID to delete');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    const url = `http://localhost:3000/admin/products/${productId}`;

    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Product deleted successfully');
        setSuccess('Product deleted successfully!');
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
        setProducts(products.filter((product) => product.productId !== productId));
        setProductId(""); // Clear form inputs after successful Deletion
      setProductName("");
      setMrp("");
      setDescription("");
      } else {
        console.error('Error deleting product:', response.statusText);
        setError('Error deleting product:', response.statusText);
        setShowError(true);
        setTimeout(() => {
            setShowError(false);
          }, 3000);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      setError('Error deleting product:', response.statusText);
      setShowError(true);
      setTimeout(() => {
          setShowError(false);
        }, 3000);
    }
  };
  function removeAll(){
    setProductId(""); 
    setProductName("");
    setMrp("");
    setDescription("");
  }

  return (
    <div>
              {showError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setShowError(false)}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 001.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
            </svg>
          </span>
        </div>
      )}
      {showSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
          role="alert"
        >
          <strong className="font-bold">Success: </strong>
          <span className="block sm:inline">{success}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => setShowSuccess(false)}
          >
            <svg
              className="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 5.652a1 1 0 00-1.414 0L10 8.586 7.066 5.652a1 1 0 10-1.414 1.414L8.586 10l-2.934 2.934a1 1 0 001.414 1.414L10 11.414l2.934 2.934a1 1 0 001.414-1.414L11.414 10l2.934-2.934a1 1 0 000-1.414z" />
            </svg>
          </span>
        </div>
      )}
      <h2 className=" mt-8 text-4xl font-bold mb-4 underline text-left md:text-center font-serif ">
        <a className="text-orange-500">Prod</a>
        <a className="text-sky-500">uct</a>
        <a className="text-lime-700"> Delete</a>
      </h2>
      <form>
        <div className="pt-4 font-serif ml-2  text-lg font-medium">
          <label className="pt-2 md: ml-2">
            Select Product:
            <select
              className="ml-5 md:ml-2 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
              value={productId}
              onChange={handleProductChange}
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product.productId} value={product.productId}>
                  {product.productName}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="font-serif ml-2  text-lg font-medium">
            <label className="pt-2 ml-2">
              Product Id:
              <input
                className="ml-12 md:ml-8 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                disabled
              />
            </label>
          </div>
          <div className="font-serif ml-2  text-lg font-medium">
            <label className="pt-2 ml-2">
              Product Name:
              <input
                className="ml-4 md:ml-4 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </label>
          </div>
          <div className="font-serif ml-2  text-lg font-medium">
            <label className="pt-2 ml-2">
              Mrp:
              <input
                className="ml-24 md:ml-20 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="number"
                value={mrp}
                onChange={(e) => setMrp(e.target.value)}
              />
            </label>
          </div>
          <div className="font-serif ml-2  text-lg font-medium">
            <label className="pt-2 ml-2">
              Description:
              <input
                className="ml-9 md:ml-10 border-2 border-gray-300 focus:border-blue-500 hover:border-blue-300 rounded-lg transition duration-300"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  md:ml-28 mt-4">
            <button onClick={handleDeleteProduct} className="m-2 w-44 text-xl border-2 rounded-md p-1 hover:bg-slate-200" type="submit">
              <a className="text-orange-500">Del</a>
              <a className="text-sky-500">ete</a>
              <a className="text-lime-700"> Product</a>
            </button>
        <button onClick={removeAll} className="m-2 w-44 text-xl border-2 rounded-md p-1 md:ml-36 hover:bg-slate-200">
          Clear all
        </button>
        <button className="m-2 w-44 text-lg border-2 rounded-md p-1 md:ml-64 hover:bg-slate-200">
          <a href="/admin/">Back to Admin Page</a>
        </button>
          </div>
        </div>
      </form>
    </div>
  );
}
