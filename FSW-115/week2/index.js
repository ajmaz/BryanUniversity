var usaData =
    [
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2019,
            "Year": "2019",
            "Population": 328239523,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2018,
            "Year": "2018",
            "Population": 327167439,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2017,
            "Year": "2017",
            "Population": 325719178,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2016,
            "Year": "2016",
            "Population": 323127515,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2015,
            "Year": "2015",
            "Population": 321418821,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2014,
            "Year": "2014",
            "Population": 318857056,
            "Slug Nation": "united-states"
        },
        {
            "ID Nation": "01000US",
            "Nation": "United States",
            "ID Year": 2013,
            "Year": "2013",
            "Population": 316128839,
            "Slug Nation": "united-states"
        }

    ]

var list = document.getElementById("list")

for (var i = 0; i < usaData.length; i++) {
    var newLi = document.createElement("li")
    newLi.textContent = "U.S population year " + usaData[i]["ID Year"] +": " + usaData[i].Population
    list.append(newLi)
}