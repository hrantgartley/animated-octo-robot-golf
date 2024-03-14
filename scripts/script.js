$.getJSON("../gameData.json", function (data) {
    for (var i = 0; i < data.gamedata.length; i++) {
        $("body").append("title: ",data.gamedata[i].title + "<br>");
        $("body").append(data.gamedata[i].description + "<br>");
        $("body").append(data.gamedata[i].link + "<br>");
    }
})
