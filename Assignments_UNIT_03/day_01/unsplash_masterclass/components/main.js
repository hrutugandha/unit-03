// key = 5VOulHaa8LTvlW6KES4GX0FR7ivMWaEqCMZWRnAAqPc

let url = `https://api.unsplash.com/photos/?client_id=5VOulHaa8LTvlW6KES4GX0FR7ivMWaEqCMZWRnAAqPc`
let parent = document.getElementById("main")

async function ApiCall(){
    try{

        let res = await fetch(`https://api.unsplash.com/photos/?client_id=5VOulHaa8LTvlW6KES4GX0FR7ivMWaEqCMZWRnAAqPc`);
        let data = await res.json();

        appendImages(data,parent)
        return data;

    }
    catch(err){
        console.log(err);
    }
}
ApiCall(url);

function appendImages(data,parent){

    data.forEach((elem) => {
            let div = document.createElement('div');
            div.id = "images";

            div.onclick = () => {
                localStorage.setItem("clicked_item",JSON.stringify(elem))
            }

            let images = document.createElement("img");
            images.src = elem.urls.small;

            let p = document.createElement("p");
            p.innerHTML = elem.user.name;

            div.append(images,p);
            parent.append(div);

        })
}

let input = document.getElementById("searchbar");

input.addEventListener("keypress",(e) => {

    if (e.key === "Enter") {
        let input_value = document.getElementById("searchbar").value;

        localStorage.setItem("search_term", input_value);
        window.location.href = "search.html";
    }

});
