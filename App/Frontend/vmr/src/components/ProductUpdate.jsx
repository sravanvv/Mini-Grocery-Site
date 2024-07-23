import React, { useState, useEffect } from "react";
import "../index.css";
import "../App.css";

export default function Productsupdate() {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [mrp, setMrp] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Fetch all products for the dropdown
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/products");
      if (!response.ok) throw new Error("Failed to fetch products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Fetch product details when a product is selected from the dropdown
  const handleProductChange = async (event) => {
    const selectedId = event.target.value;
    setProductId(selectedId);
    setSelectedProductId(selectedId);

    if (selectedId) {
      try {
        const response = await fetch(
          `http://localhost:3000/admin/products/${selectedId}`
        );
        if (!response.ok) throw new Error("Failed to fetch product details");
        const product = await response.json();
        setProductName(product.productName || "");
        setMrp(product.mrp || "");
        setDescription(product.description || "");
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    } else {
      // Clear form if no product ID is selected
      setProductName("");
      setMrp("");
      setDescription("");
    }
  };

  // Update an existing product
  const handleUpdateProduct = async () => {
    if (!selectedProductId) {
      console.error("Please select a product to update");
      return; // Prevent unnecessary request if no product is selected
    }

    const url = `http://localhost:3000/admin/products/${selectedProductId}`;

    try {
      const updatedProductData = {
        productName,
        mrp: Number(mrp),
        description,
      };

      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProductData),
      });

      if (response.ok) {
        // Optionally, fetch the updated product from the server for confirmation
        const updatedProduct = await response.json();
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.productId === selectedProductId ? updatedProduct : product
          )
        );
        console.log("Product updated successfully!");
      } else {
        console.error("Error updating product:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className=" mt-8 text-4xl font-bold mb-4 underline text-left md:text-center font-serif ">
        <a className="text-orange-500">Prod</a>
        <a className="text-sky-500">uct</a>
        <a className="text-lime-700"> Update</a>
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
          <div className="grid grid-cols-2 md:grid-cols-2  md:ml-60 mt-4">
            <button onClick={handleUpdateProduct} className="ml-2 w-40 text-xl border-2 rounded-md p-2 hover:bg-slate-200" type="submit">
              <a className="text-orange-500">Upd</a>
              <a className="text-sky-500">ate</a>
              <a className="text-lime-700"> Product</a>
            </button>
            <button className="w-40 text-xl border-2 rounded-md p-1 md:ml-40 hover:bg-slate-200">
          <a href="/admin/">Admin Page</a>
        </button>
          </div>
        </div>

      </form>
    </div>
  );
}
