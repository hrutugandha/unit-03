import navbar from "./componants/navbar.js"

import {getData, appendData} from "./componants/navbar.js"


let nav_div = getElementById('navigation');
nav_div.innerHTML = navbar();

let url = `https://fakestoreapi.com/products/category/jewelery`;

let res = await getData(url);


let parent = getElementById('data')
appendData(res,parent)