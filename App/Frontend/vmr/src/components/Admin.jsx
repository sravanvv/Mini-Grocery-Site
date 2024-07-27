import React from "react";
// import Productsupdate from "./ProductUpdate";
// import Productsimp from "./Productsimp";

export default function AdminComponent() {
  return (
    <div>
    <h2 className="mt-8 ml-2 text-4xl font-bold mb-4 underline text-left md:text-center font-serif 
"><a className="text-orange-500">Mana</a><a className="text-sky-500"> Groc</a><a className="text-lime-700">ery</a>
</h2>
    <div className="grid grid-cols-1 gap-4 mr-4 md:grid-cols-3 md:gap-14 mt-36 ">
      <button className=" ml-10 p-1  text-xl antialiased text-white hover:text-slate-800 hover:bg-amber-500 bg-amber-600 rounded-md">
        <a href="/admin/ProductsImport">Import Products</a>
      </button >
      <button className="ml-10 p-1  text-xl antialiased text-sky-500 hover:text-slate-800 hover:bg-slate-200 shadow-lg rounded-md">
        <a href="/admin/ProductsUpdate">Update Products</a>
      </button>
      <button className="ml-10 p-1  text-xl antialiased text-white hover:text-slate-800 hover:bg-lime-700 bg-lime-800 rounded-md">
        <a href="/admin/ProductsDelete">Delete Products</a>
      </button>
    </div>
    </div>
  );
}
