/*
GET https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

GET https://youtube.googleapis.com/youtube/v3/search?q=input&key=[YOUR_API_KEY] HTTP/1.1

Authorization: Bearer [YOUR_ACCESS_TOKEN]
Accept: application/json

<iframe width="956" height="538" src="https://www.youtube.com/embed/AsO-6XuIi98?list=RDMMI5TL8Kh8T7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
 encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
https://www.youtube.com/embed/dA7T5EDUt6w"

*/



let container = document.getElementById("videoContainer");
let api_key="AIzaSyBnFY8JrdPKsnTI9yXfgj-Fso336qNWHIM";


getvidData = async () => {
  try{

    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBnFY8JrdPKsnTI9yXfgj-Fso336qNWHIM`);
    let data = await res.json();

    data = data.items;
    appendVideos(data);
  }
  catch(err){
    console.log(err);
  }
}

getvidData()

function appendVideos(data){

  data.forEach((vid) => {

    let div = document.createElement('div');
    div.id= "videoCard";

    let img = document.createElement('img');
    img.setAttribute("src",vid.snippet.thumbnails.default.url);

    let title = document.createElement("h3");
    title.innerHTML = vid.snippet.title;

    let channelTitle = document.createElement("p");
    channelTitle.innerHTML = vid.snippet.channelTitle;

    let discription = document.createElement("p");
    discription.innerHTML = vid.snippet.description;

    div.append(img,title,channelTitle);
    container.append(div);

   })

};

let input = document.getElementById("search").value;
console.log(input)

  async function searchVideos() {
    try {

      let res = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=&key=AIzaSyBnFY8JrdPKsnTI9yXfgj-Fso336qNWHIM&type=video&maxResults=25`
      );
      let data = await res.json();

      data = data.items;
      console.log("data:", data);
      appendsearchResults(data);

    } catch (err) {
      console.log("err:", err);
    }
  }

  function appendsearchResults(data) {

    container.innerHTML = "";
    data.forEach((res) => {
        console.log(res);
        let vidId = res.id.videoId;

        console.log(vidId)
            
        let div = document.createElement('div');
        div.id= "videoCard";

        let iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${vidId}`;

        div.append(iframe);
        container.appendChild(div);
      })
  }
