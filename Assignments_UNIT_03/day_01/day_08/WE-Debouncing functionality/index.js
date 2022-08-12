var timerId;

  let movies_div = document.getElementById("movies");

  async function searchMovies(name) {
    movies_div.innerHTML = null;

    let response = await fetch(`https://www.omdbapi.com/?s=${name}&apikey=d806bd70`);

    let data = await response.json();

    return data.Search;
  }

  async function appendMovies(m) {
    if (m === undefined) {
      return false;
    }

    m.forEach(({ Title }) => {
      let p = document.createElement("p");

      p.innerText = Title;

      movies_div.append(p);
    });
  }

  function throttleFunction(func, delay) {
    // If setTimeout is already scheduled, no need to do anything
    if (timerId) {
      clearTimeout(timerId);
    }

    // Schedule a setTimeout after delay seconds
    timerId = setTimeout(function () {
      func();
    }, delay);
  }

  async function main() {
    let name = document.getElementById("query").value;

    if (name.length <= 2) {
      return false;
    }

    console.log("fired");

    let m = await searchMovies(name);

    appendMovies(m);
  }

  //1. get input value
  //2. search movie by name
  //3. append movies
  //4. add edgecases
  //5. need of debouncing
  //6. implement debounce function

