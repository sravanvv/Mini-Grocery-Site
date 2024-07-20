import React from "react";
import Productsupdate from './ProductUpdate';
import Productsimp from './Productsimp';


export default function AdminComponent(){


return(
<div>

   <button><a href="/admin/ProductsImport" >Import Products</a></button> <hr></hr>
   <button><a href="/admin/ProductsUpdate" >Update Products</a></button> <hr></hr>
   <button><a href="/admin/ProductsDelete" >Delete Products</a></button> 
</div>
);
}