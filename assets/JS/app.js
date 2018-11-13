// Performing GET requests to the OMDB API and logging the responses to the console
var artist = "3PhoLpVuITZKcymswpck5b"

function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/"+artist+"/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQBjl3Kl9v1UiYv7Zet9_23RuWUZMGjCBY-UBapuweRjXbdTQbCdtwH9dASy2AzMkdZWyrxwSEc9wQSWhdQtPKopgUoxjDedz1TmjNe4uXUOehmp1dfRXiFVblzsJpXLPOyhLYbTSRuuJ5dXjATQwglQ98PFc9sYEZsiaVAovRdyxkAak6MWRZINz9BxmN_hYJGWrRICSLP33lNM6OqmviNXeK8WgLxo8Q00hbDti5xrwlsaAWTHzGir5PXiQF2f_1MvvR_YzZrRDiHhMuEJ"
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