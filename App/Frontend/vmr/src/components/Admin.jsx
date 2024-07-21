import React from "react";
import Productsupdate from "./ProductUpdate";
import Productsimp from "./Productsimp";

export default function AdminComponent() {
  return (
    <div>
    <h2 className=" mt-8 text-4xl font-bold mb-4 underline text-left md:text-center font-serif 
"><a className="text-orange-500">Mana</a><a className="text-sky-500"> Groc</a><a className="text-lime-700">ery</a>
</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-10 mt-32 sm:mr-3">
      <button className=" ml-10 p-1 backgroundcol text-2xl antialiased text-white hover:text-slate-800 hover:bg-amber-500 bg-amber-600 rounded-md">
        <a href="/admin/ProductsImport">Import Products</a>
      </button >
      <button className="ml-10 p-1 backgroundcol text-2xl antialiased text-sky-500 hover:text-slate-800 hover:bg-slate-200 shadow-lg rounded-md">
        <a href="/admin/ProductsUpdate">Update Products</a>
      </button>
      <button className="ml-10 p-1 backgroundcol text-2xl antialiased text-white hover:text-slate-800 hover:bg-lime-700 bg-lime-800 rounded-md">
        <a href="/admin/ProductsDelete">Delete Products</a>
      </button>
    </div>
    </div>
  );
}
