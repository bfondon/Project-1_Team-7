// Performing GET requests to the OMDB API and logging the responses to the console
function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/0K1q0nXQ8is36PzOKAMbNe/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQBxasl7fUckdbsGSntQalFFlyp21BokrjogawR3mJ7BKvHzqcJ0aNVtUQe3muMSn4GjhzicdanMNTR2Wvt3XRYw011UUcQt2Mb7RGIlPKBMXBQ1Q6KOk8cuackRlXBRdEuHMAKGc-gkTb7mOErh9wGk4rH7KUbgqnWCIhaoYR8WxcZkvFoc0jad3iMrjOC73L-n2bGrcL2X8qiEaPRD9abbqL5xJpcJFwSOWF0GqFp3nCJDRzixLn-dqGy_pKzW0g9tSUku6rbObFGY-7pB"
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