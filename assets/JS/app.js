// Performing GET requests to the OMDB API and logging the responses to the console

var artist = "01aC2ikO4Xgb2LUpf9JfKp"

function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/"+artist+"/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",

      "Authorization": "Bearer BQDkM3Ne0Wux1Iy2gi9nqJRLeCP2wLdhGux2UZ0yj6UltIfWEOZ_eAFcJPwe-5V0HevQmQZtRmTTLvq6hwfEDrK4yCnXpj0LszsWIE3ldSx7SYDzhA-ZtanuqcRB86IR17vSsACopSEviGsz2Psm_zns0LgDxZJ4tT2NCbAIwP8bOIsd4ZEGNUSsweLeL5Q_e8A8FZxxCi_bpWk9lU1K128dB57NLMERZzVqKsyClW5OMbjzL9gYQr7Witbx02-FAR2MtUzSH-RDqj7AFYx-"

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