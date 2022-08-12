
async function searchMovie(){
    try{
        let movie = document.getElementById("query").value;

        if(movie.length === 0){
            return false;
        }
        let res = await fetch(`http://www.omdbapi.com/?apikey=7df5260b&s=${movie}`);
        let data = await res.json();

        return data.Search;

    }catch(err){
        console.log(err);
    }
}

async function main(){
    try{
        let data = await searchMovie();

        if(data == undefined){
            return false;
        }
        appendData(data);
        console.log(data)
    }catch(err){
        console.log(err);
    }
}

let movies_div = document.getElementById("movies");
function appendData(mov){

    movies_div.innerHTML = null;
    mov.forEach(function(m){

        let div = document.createElement("div");

        let p = document.createElement("p");
        p.innerHTML = m.Title;

        let poster = document.createElement("img");
        poster.setAttribute("src",m.Poster);

        let type = document.createElement("p");
        type.innerHTML = m.Type;

        let year = document.createElement("p");
        year.innerHTML = m.Year;

        div.append(poster,p,type,year)
        movies_div.append(div)
    })
}

let timeout;

function debounce(func, delay) {

    if(timeout){
        clearInterval(timeout);
    }

    timeout = setTimeout(function () {
        func();
    }, delay);
}

