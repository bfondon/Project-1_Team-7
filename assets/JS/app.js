// Performing GET requests to the OMDB API and logging the responses to the console
var artist = "3PhoLpVuITZKcymswpck5b"

function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/"+artist+"/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQBXKYVHR_R8f7rW2xg_yRApTEQvlJ1RCJ8N8Wbx1AN930Bsbf87rAh4j9Gt5LO3uOIXFH-Y0G762n8Ccfp20s_oxBSNxCchJqUzp5kq4xxknERH7kFyBgyqLNGPDyg7EY8z0qUUXbbITdAA5IiYLXsXBmpMjD6y4bm2lZQz27TojQBeiZB3zCMBWAfm3qDsQyiuLyRagBoQ_EwlVMG_1sK8hOtu0JXZinSiN5JILnc--lH-PxokNIJVzwFGrhS5CQwxBopH7vXfweAiFdZO"
    }
  }).then(function(response) {

for (i = 0; i < 10; i++) {
      $("#topHits").append("<li>" + country + " #" + (i + 1) + ": " + response.tracks[i].name + "</li>");
    }
  });
  }
  setTimeout(function(){
    ajaxCall("US")
  },0)


  setTimeout(function(){
    ajaxCall("NL")
  },3000)

  setTimeout(function(){
    ajaxCall("DE")
  },6000)

  setTimeout(function(){
    ajaxCall("FR")
  },9000)

  setTimeout(function(){
    ajaxCall("IE")
  }, 12000)

  // The Spotify API goes above this text ^^ 
  
// ---------------------------------------------------------