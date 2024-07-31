import React, { useState } from "react";
import "../index.css";

export default function Productsimp() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [mrp, setMrp] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (!productId || !productName || !mrp) {
      setError("Please fill out all required fields");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000); // Hide error message after 3 seconds
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
      setSuccess("Product added successfully!");
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      setProductId(""); // Clear form inputs after successful submission
      setProductName("");
      setMrp("");
      setDescription("");
      setError("");
      setShowError(false);
    } catch (error) {
      console.error("Error submitting data:", error);
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
        <a className="text-lime-700"> Import</a>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="sm:grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className=" font-serif ml-2  text-lg font-medium">
            <div className="mt-2">
              <label>
                Product Id:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-11  "
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
                  className="border-yellow-600 border-2 rounded-lg ml-4  "
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="md:mt-16 font-serif ml-2 text-lg font-medium sm:-mt-2">
            <div className="mt-2">
              <label>
                Mrp:
                <input
                  className="border-yellow-600 border-2 rounded-lg ml-24  "
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
                  className="border-yellow-600 border-2 rounded-lg ml-9  "
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  md:ml-60 mt-4">
            <button
              className="m-2 w-44 text-xl border-2 rounded-md p-2 hover:bg-slate-200"
              type="submit"
            >
              <a className="text-orange-500">Su</a>
              <a className="text-sky-500">bm</a>
              <a className="text-lime-700">it</a>
            </button>
            <button
              onClick={removeAll}
              className="m-2 w-44 text-xl border-2 rounded-md p-1 md:ml-36 hover:bg-slate-200"
            >
              Clear all
            </button>
            <button className="w-44 m-2 text-xl border-2 rounded-md p-1 md:ml-64 hover:bg-slate-200">
              <a href="/admin/">Admin Page</a>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
