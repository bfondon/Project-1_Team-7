// Performing GET requests to the OMDB API and logging the responses to the console
function ajaxCall(country){
    $.ajax({
    url: "https://api.spotify.com/v1/artists/0K1q0nXQ8is36PzOKAMbNe/top-tracks?country="+country,
    method: "GET",
    headers:{
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer BQAjvIq1-boBzeNYvh0Qeu28FlyH1STugTgSbiKRJqVT6CaXphr6J0S4TozRYqz-q28bIOdcekvhoemIrYC9UJ15mMoyc0fGsXHV-LSEu7Jjk7BhowJUAz70adjsYPcb6UeSrE7voHMYy1YK70g"
    }
  }).then(function(response) {
    console.log(response);
    console.log(country + " #1: " + response.tracks[0].name);
    console.log(country + " #2: " + response.tracks[1].name);
    console.log(country + " #3: " + response.tracks[2].name);
    console.log(country + " #4: " + response.tracks[3].name);
    console.log(country + " #5: " + response.tracks[4].name);
    console.log(country + " #6: " + response.tracks[5].name);
    console.log(country + " #7: " + response.tracks[6].name);
    console.log(country + " #8: " + response.tracks[7].name);
    console.log(country + " #9: " + response.tracks[8].name);
    console.log(country + " #10: " + response.tracks[9].name);

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

  console.log("Because our AJAX requests are asynchronous, this line of code will most likely log first");
