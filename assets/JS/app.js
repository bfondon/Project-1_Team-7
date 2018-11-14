// Performing GET requests to the OMDB API and logging the responses to the console
var artist = "3PhoLpVuITZKcymswpck5b"

function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/"+artist+"/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",

      "Authorization": "Bearer BQARD5L_9_Zydkq0EZD6ZThql2qh80_hQ-mlzJ9eY_DCCrk_tBtGrBPiePrTcbMlfPIxCl7kQCa0zUfF3Bq4jwUSue8VTdr1TrtYr7WHTcP0quXoSAcBfO8WO59JpnOLFfS1ZwLvBKAjhoKmbSencoLly3FcroBvCEsNENz0ISrJahzmex20Bz1nv0vCItT1MyY8zjmHI22tr6lRN72minWHNm1BcJJt_cWN6V5lSmomeygaqGdD1cylR0F2rSVjXVEVqV-qhmdT-F9s0j2I"

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