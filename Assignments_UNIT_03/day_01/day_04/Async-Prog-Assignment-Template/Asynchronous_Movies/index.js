var slideshow = document.getElementById('slideshow');
var moviesContainer = document.getElementById('movies');
var key = "edc386";
let movie_div = document.getElementById("searchBox");
let h1 = document.getElementById("errortag");

var data = [{'imgSrc': 'https://gogocdn.net/cover/tokyo-revengers.png','title': 'Tokyo Revengers'},
{'imgSrc': 'https://gogocdn.net/cover/gensou-sangokushi-tengen-reishinki.png','title': 'Gensou Sangokushi Tengen Reishinki'},
{'imgSrc': 'https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-part-2.png','title': 'Shigen No Kyojin - The Final Season'},
{'imgSrc': 'https://gogocdn.net/cover/boruto-naruto-next-generations.png','title': 'Boruto: Naruto next Generation'},
{'imgSrc': 'https://cdnimg.xyz/images/anime/One-piece.jpg','title': 'One Piece'},
{'imgSrc': 'https://gogocdn.net/cover/horimiya.png','title': 'Horimiya'}]

localStorage.setItem("data", JSON.stringify(data));

function start(){

  let slideshow_img = document.getElementById('slideshow_img');
  let title = document.getElementById("name");
  let rating = document.getElementById("rating");


  let i =0;

 setInterval(function(){

    if(i === data.length){
      i = 0;
    }
    
  slideshow_img.src = data[i].imgSrc;
  title.innerHTML = data[i].title;
  rating.innerHTML =   `IMDB: ★${Math.round(Math.random()*9)}`;

  i = i + 1;

  },3000)
}

start()

let timeout;

function debounce(func, delay) {

    if(timeout){
        clearInterval(timeout);
    }

    timeout = setTimeout(function () {
        func();
    }, delay);
}

let movieContainer = document.getElementById("movies");

let url = `https://kitsu.io/api/edge/trending/anime`;

async function getMovie(){
  try {

  let res = await fetch(url)

  let movieData = await res.json();

  showMovie(movieData)

  }
  catch (err){
   console.log(err);
  }
  
}
getMovie()

function showMovie(m){

    m.data.forEach(function (movie){

      let div = document.createElement("div");

      let title = document.createElement("h3");
      title.innerHTML = movie.attributes.slug;

      let img = document.createElement("img");
      img.setAttribute("src", movie.attributes.coverImage.original);

      let rating = document.createElement("h5");
      rating.innerHTML = `IMDB: ★   ${movie.attributes.averageRating}`;

      let popularity = document.createElement("h5");
      popularity.innerHTML = `Ranking: ${movie.attributes.popularityRank}`;

      let cat = document.createElement("h5");
      cat.innerHTML = `Category: ${movie.attributes.subtype}`;

      let link = document.createElement("a");
      link.setAttribute("src", `https://www.youtube.com/watch?v=${movie.attributes.youtubeVideoId}`);

      div.append(img,title,rating,popularity,cat,link);
      moviesContainer.append(div);
    })
}
showMovie();

async function searchMovie(name){
  try{
    let movie = document.getElementById("searchMovie").value;

  let res = await fetch (`https://kitsu.io/api/edge/anime?filter[text]=${movie}`);
  let data = await res.json();

  if(movie == ""){
    h1.innerHTML = "Please Enter a Movie!"
  }
  else{
    h1.innerHTML = "";
  }
  appendData(data);
  }
  catch(err){
    console.log(err);
  }
}
searchMovie()


function appendData(mov){

  movie_div.innerHTML = null;
  if (mov === undefined) {
    return false;
  }

  mov.data.forEach(function(m){

    console.log(m);
    let div = document.createElement('div');

    let div2 = document.createElement('div');

    let title = document.createElement("h4");
    title.innerHTML = m.attributes.titles.en;

    if(m.attributes.titles.en == undefined){
      title.innerHTML = m.attributes.slug;
    }

    let year = document.createElement("p");
    year.innerHTML = `Release Date: ${m.attributes.startDate}`;

    let poster = document.createElement("img");
    poster.src = m.attributes.posterImage.original;

    let ranking = document.createElement("p");
    ranking.innerHTML = `Ranking: ${m.attributes.popularityRank}`;

    div.append(poster,title,year,ranking)
    div2.append(div)
    movie_div.append(div2);
  })
}