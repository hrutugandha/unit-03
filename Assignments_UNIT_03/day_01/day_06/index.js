

let url = "https://fakestoreapi.com/products";
const container= document.getElementById("container");


async function getData(){
 try{
    let res = await fetch(url)
    let data = await res.json();
    
    appendProduct(data);

} catch(err){
    console.log(err)
  }
}

getData()

function appendProduct(data){
    data.Search.forEach(function(el){
        
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;

        let p = document.createElement("p");
        let title = document.createElement("p");
        title.innerHTML = el.title

        let price = document.createElement("p")
        price.innerHTML = el.price;

        div.append(img,title,price,p);
        container.append(div);
    })
}