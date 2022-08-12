

function storeImg(){

    let images = [];
    let img = document.getElementById("url").value;

    images = localStorage.getItem('images');
    console.log(images)

    if(images == null){
       images = [];
    }
    else{
        images = JSON.parse(localStorage.getItem('images'))
    }
    
    images.push(img);
    localStorage.setItem("images", JSON.stringify(images))
}