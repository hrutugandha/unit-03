
let url = "http://www.omdbapi.com/?apikey=edc386&s=anime";
const container= document.getElementById("container");


async function getMovies(){

 try{
    let res = await fetch(url)

    let data = await res.json();
    appendProduct(data)
} catch(err){
    console.log(err)
}
}

getMovies()

function appendProduct(data){
    data.forEach(function (el) {

            let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.image;

            let p = document.createElement("p");
            let title = document.createElement("p");
            title.innerHTML = el.title;

            div.append(img, title,p);
            container.append(div);
        })
}