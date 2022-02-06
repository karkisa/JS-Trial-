const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/v1/weather', (req, res) => {
	res.json({ "coord": { "lon": -123.262, "lat": 44.5646 }, "weather": [{ "id": 804, "main": "Clouds", "description": "overcast clouds", "icon": "04n" }], "base": "stations", "main": { "temp": 39.47, "feels_like": 39.47, "temp_min": 36.81, "temp_max": 47.17, "pressure": 1020, "humidity": 72 }, "visibility": 10000, "wind": { "speed": 2.95, "deg": 357, "gust": 2.93 }, "clouds": { "all": 99 }, "dt": 1642381311, "sys": { "type": 2, "id": 2040223, "country": "US", "sunrise": 1642347934, "sunset": 1642381185 }, "timezone": -28800, "id": 5720727, "name": "Corvallis", "cod": 200 })
});

app.get('/v1/hello', (req, res) => {
	res.json({ "message": "Watch one piece!" })
});

app.post('/v1/auth', (req, res) => {
	var username = req.body.username;
	var password = req.body.password;

	if (username && password) {
		res.json({
			"Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
			"expires": "2012-04-23T18:25:43.511Z"

		})

	}
	else {
		res.status(400)
		res.json({ "message": "Invalid credentials" })

	}

});

app.listen(3000, () => {
	console.log("Started on PORT 3000");
})