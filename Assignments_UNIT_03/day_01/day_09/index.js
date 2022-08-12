
//https://youtube.googleapis.com/youtube/v3/channels?key=[YOUR_API_KEY]
let userInput;
let searchResult = document.getElementById("searchResult");


let container = document.getElementById("container");

async function getData(){
    try{
        let url = `AIzaSyDAnRvsxD1WYz_qeyo8EQ9yk8EMNzJovQQ}`;
        userInput = document.getElementById("searchTerm").value;
        console.log(userInput);
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?type=video&key=${url}&q=${userInput}`)
        let data = await res.json();
    
        let vidList = data.items;
        displayData(vidList);
    }
    catch(err){
        console.log(err);
    }
}

getData()


const displayData = async () => {

    searchResult.innerHTML = "";

    console.log(vidList);

    const { id:{video}, } = video;

    let vidCard = document.createElement("div");
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.setAttribute("allowfullscreen", "true");
    iframe.width = "100%";

    vidCard.append(iframe);
    searchResult.append(vidCard)
}

  //
  //https://youtube.googleapis.com/youtube/v3/search?q=tesla&key=[YOUR_API_KEY]

  let API = "AIzaSyA2YZKo5xi7ONczJP8MGGl2a98QQn-nC5o";

  let search_results_div = document.getElementById("search_results");

  async function searchVideos() {
    try {
      let inp = document.getElementById("search").value;

      let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${inp}&key=${API}&type=video&maxResults=30&part=snippet`
      );

      let data = await res.json();
      console.log("data:", data);

      let array_of_videos = data.items;

      appendVideos(array_of_videos);
    } catch (err) {
      console.log("err:", err);
    }
  }

  const appendVideos = (arr) => {
    arr.forEach(({ id: { videoId } }) => {
      console.log("videoId:", videoId);
      let div = document.createElement("div");

      let iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.width = "460px";
      iframe.height = "260px";
      //iframe.allowfullscreen = "true";

      iframe.setAttribute("allowfullscreen", true);

      div.append(iframe);

      search_results_div.append(div);
    });
  };