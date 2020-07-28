function getWeatherdata() {
    var username = document.getElementById('username').value;
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${username}&appid=4e8fe55b900263c5f83603ed631e15ad`,
        success: function (data) {
            var a = JSON.stringify(data.main["temp"])
            document.getElementById('temp').innerHTML = a;
            var b = JSON.stringify(data.main["feels_like"])
            document.getElementById('feels_like').innerHTML = b;
            var c = JSON.stringify(data.main["temp_min"])
            document.getElementById('temp_min').innerHTML = c;
            var d = JSON.stringify(data.main["temp_max"])
            document.getElementById('temp_max').innerHTML = d;
            var e = JSON.stringify(data.main["pressure"])
            document.getElementById('pressure').innerHTML = e;
            var f = JSON.stringify(data.main["humidity"])
            document.getElementById('humidity').innerHTML = f;
        },
        error: function (e) {
            console.log(e);
        }
    })
}



