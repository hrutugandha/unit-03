
let parent = document.getElementById("main");


async function getImages(){

  try{

    let res = await fetch(`https://api.unsplash.com/photos/?client_id=5VOulHaa8LTvlW6KES4GX0FR7ivMWaEqCMZWRnAAqPc`);

    let data = await res.json();

    appendImages(data,parent);
    return data;

  }
  catch(err){
      console.log(err);
  }
}
getImages();

 function appendImages(data,parent){

    console.log(data);
    data.forEach(function(elem){

        let div = document.createElement('div');
        div.id = 'pictures';
        div.onclick = function(){
            localStorage.setItem("clicked_item",JSON.stringify(elem))
            window.location.href = "info.html";
        }

        let img = document.createElement('img');
        img.src = elem.urls.small;

        let user = document.createElement("p");
        user.innerHTML = elem.user.name;

        div.append(img,user);
        parent.append(div);
    })

 };

 let input = document.getElementById("search");

 input.addEventListener("keypress", function(e) {

    if(e.code === "Enter"){
        let input_term = document.getElementById("search").value;

        localStorage.setItem("search_term", input_term);
        window.location.href = "search.html";
    }
 });