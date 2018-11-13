
var city;
var limit = 200;

$("button").click(function () {
     
    $("#city-list").remove()

    var country = $("input").val().trim().toLowerCase()
    var cityList = $("<div>")
    cityList.attr("id", "city-list")
    cityList.text("Hot cities: ")
    $(".selectbycountry").after(cityList)
    for (var i = 0; i < toplistOfCities.length; i++) {

        var listedCountry = toplistOfCities[i].country
        if (country === listedCountry) {
            for (var j = 0; j < toplistOfCities[i].cities.length; j++) {
                var newDiv = $("<div>");
                newDiv.text(toplistOfCities[i].cities[j]);
                newDiv.addClass("cities");
                newDiv.attr("id", toplistOfCities[i].cities[j])
                $("#city-list").append(newDiv)
                console.log(newDiv.attr("id"));

                $(newDiv).click(function (event) {

                    $("#venue-list").remove()

                    var venueList = $("<div>")
                    venueList.attr("id", "venue-list")
                    venueList.text("Trending venues: ")
                    $(event.target).append(venueList)

                    city = $(event.target).attr("id")
                    var queryURL = "https://api.foursquare.com/v2/venues/explore?near=" + city + "&query=music&limit=" + limit + "&client_id=N3WBPOBFZFE3NPZX2UZNQ5SCRRXVRXV0DTXQQ0NIJHYAU1YX&client_secret=ZXWPDZ33GEYF0FDKTX1DXFTYNCIPXVC1TIWTHFR2UTYGCKZX&v=20180101"
                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then(function (callback) {
                        console.log(callback)

                        for (var i = 0; i < limit; i++) {
                            var vanueName;
                            if (callback.response.groups[0].items[i]) {
                                venueName = callback.response.groups[0].items[i].venue.name
                                var f = callback.response.groups[0].items[i].venue.categories[0].pluralName
                                if (f === "Rock Clubs" || f === "Nightclubs" || f === "Music Venues" || f === "Jazz Clubs" || f === "Lounges") {
                                    var newDiv2 = $("<div>");
                                    newDiv2.text(venueName);
                                    newDiv2.addClass("venues");
                                    newDiv2.attr("id", venueName)
                                    $(venueList).append(newDiv2)
                                }
                            }

                        }

                    })

                })

            }

        }
    }

})




//--------------------//
var toplistOfCities =
    [

        {
            country: "south africa",
            cities: ["pretoria", "johannesburg", "cape town"]
        },
        {
            country: "denmark",
            cities: ["copenhagen", "aarhus"]
        },
        {
            country: "malaysia",
            cities: ["kuala lumpur", "penang"]
        },
        {
            country: "singapore",
            cities: ["singapore"]
        },
        {
            country: "israel",
            cities: ["jerusalem", "tel aviv"]
        },
        {
            country: "philippines",
            cities: ["manila", "quezon city"]
        },
        {
            country: "egypt",
            cities: ["cairo", "alexandria"]
        },
        {
            country: "finland",
            cities: ["helsinki", "espoo", "tampere"]
        },
        {
            country: "ireland",
            cities: ["dublin", "cork"]
        },
        {
            country: "greece",
            cities: ["athens", "thessaloniki"]
        },
        {
            country: "portugal",
            cities: ["lisbon"]
        },
        {
            country: "czech republic",
            cities: ["prague", "brno"]
        },
        {
            country: "new zealand",
            cities: ["wellington", "auckland"]
        },
        {
            country: "united states",
            cities: ["washington, d.c.", "New York City", "Los Angeles"]
        },
        {
            country: "china",
            cities:["beijing","shanghai","chongqing"]
        },
        {
            country: "japan",
            cities: ["tokyo","yokohama","osaka"]
        },
        {
            country: "germany",
            cities:  ["berlin","rhine-ruhr","hamburg"]

        },{
            country: "united kingdom",
            cities: ["london","manchester","birmingham"]
        },{
            country: "france",
            cities:  ["paris","marseille","lyon"]
        },{
            country: "india",
            cities: ["new delhi","mumbai","delhi"]
        },{
            country: "italy",
            cities: ["rome","milan","florance"]
        },{
            country: "brazil",
            cities:["brasilia","sao paulo","rio de janeiro"]
        },{
            country: "canada",
            cities: ["ottawa","toronto","montreal"]
        },{
            country: "south kerea",
            cities: ["seoul","busan","daegu"]
        },{
            country: "australia",
            cities:["canberra","sydney","melbourne"]
        },{
            country: "russia",
            cities: ["moscow","saint petersburg"]
        },{
            country: "spain",
            cities: ["madrid","barcelona"]
        },{
            country: "mexico",
            cities: ["mexico city","ecatepec", "cacun"]
        },{
            country: "turkey",
            cities: ["ankara","istanbul"]
        },{
            country: "netherlands",
            cities: ["amsterdam","rotterdam"]
        },{
            country: "switzerland",
            cities: ["bern","zurich","geneva"]
        },{
            country: "saudi arabia",
            cities: ["riyadh","jeddah"]
        },{
            country: "argentina",
            cities: ["buenos aires","cordoba"]
        },{
            country: "sweden",
            cities: ["stockholm","gothenburg"]
        },{
            country: "poland",
            cities: ["warsaw","krakow"]
        },{
            country: "belgium",
            cities: ["brussels","antwerp"]
        },{
            country: "thailand",
            cities: ["bangkok","nonthaburi","pak kret"]
        },{
            country: "austria",
            cities: ["vienna","graz"]
        },{
            country: "norway",
            cities: ["oslo","bergen"]
        },{
            country: "united arab emirates",
            cities: ["abu dhabi","dubai"]
        }          
        
    ]
