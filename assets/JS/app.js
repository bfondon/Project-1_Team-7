// Performing GET requests to the OMDB API and logging the responses to the console
var artist = "3PhoLpVuITZKcymswpck5b"

function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/"+artist+"/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQBEf0U9YEzcZQ1inZG5sosWtKKjKgTxeQIkanEiWG3Yl0pJmR7ZrMW0Sj8SyDNa23RJZD01CObae_NZug50ciwPhU5xpwrqXXUoH6bO6wKXQdEpnSLD7wS1cMfG-uJLBiYvHBMG17Vgtm4D9N-J5te9VM_lbfy2GPY6g8E_9I0ze5tjCsMEKRvtf7UXWQlo5Y0YRS1nKSso10uSRpQrA5kirLbUCEkvc-vRwK0iZ_cm7cC8rJGn0M_PSiEgLFtrHj7A0HEObsbHr5WUgw"
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