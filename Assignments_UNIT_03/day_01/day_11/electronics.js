import navbar from "componants/navbar.js"
import{getData, appendData} from "./scripts/showData.js"


let nav_div = getElementById('navigation');
nav_div.innerHTML = navbar();

let url = `https://fakestoreapi.com/products/category/electronics`;

let res = await getData(url);


let parent = getElementById('data')
appendData(res,parent)