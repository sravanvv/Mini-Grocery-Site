import {atom} from "recoil";

 export const productId=atom({
    key:"productId",
    default:1
 });

 export const productName=atom({
    key:"productName",
    default:"Product"
 });

 export const mrp=atom({
    key:"mrp",
    default:100
 });

 export const description=atom({
    key:"description",
    default:"ok"
 });
