import React, { useState } from "react";
import "../index.css";

export default function Productsimp() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [mrp, setMrp] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!productId || !productName || !mrp) {
      setError('Please fill out all required fields');
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/admin/podt/products",
        {
          // Replace with your actual backend endpoint
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: productId,
            productId,
            productName,
            mrp,
            description,
          }), // Map form fields to request body
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      console.log("Data submitted successfully!");
      setProductId(""); // Clear form inputs after successful submission
      setProductName("");
      setMrp("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h2 className=" mt-8 text-4xl font-bold mb-4 underline text-left md:text-center font-serif ">
        <a className="text-orange-500">Prod</a>
        <a className="text-sky-500">uct</a>
        <a className="text-lime-700"> Import</a>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="mt-16 font-serif ml-8  text-lg font-medium">
            <div className="mt-2">
              <label>
                Product Id:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-10 p-0.5"
                  type="text"
                  value={productId}
                  onChange={(e) => setProductId(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-2">
              <label>
                Product Name:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-3 p-0.5"
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="md:mt-16 font-serif ml-8 text-lg font-medium sm:-mt-2">
            <div className="mt-2">
              <label>
                Mrp:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-24 p-0.5"
                  type="number"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                />
              </label>
            </div>
            <div className="mt-2">
              <label>
                Description:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-10 p-0.5"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center ml-16 mt-4">
            <button className="text-xl border-2 rounded-md p-2 hover:bg-slate-200 ml-24" type="submit">
              <a className="text-orange-500">Su</a>
              <a className="text-sky-500">bm</a>
              <a className="text-lime-700">it</a>
            </button>
            <button className="text-xl border-2 rounded-md p-1 ml-4 hover:bg-slate-200">
          <a href="/admin/">Admin Page</a>
        </button>
          </div>
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
