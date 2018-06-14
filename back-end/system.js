var http = require('http')

var printer = require('./printer') 

function get(city, country) {
	var request = http.get("http://api.aerisapi.com/observations/"+city+","+country+"?client_id=&client_secret=", function (response){

		//console.dir(response.statusCode)

		var body = ""
		response.on('data', function(chunk){
			body += chunk
		})
		response.on('end', function(chunk){
			if(response.statusCode === 200) {
				try {
					var data_weather = JSON.parse(body)
					var data = data_weather.response.ob
				//console.log(typeof body);
				//console.log(data_weather.response.ob.tempC);
				printer.printMessage(city, data.tempC, data.tempF)
				//console.log(data_weather.profil.ob.tempC);
				} catch(error) {
					console.error(error.message)
				}
			} else {
				printer.printError({ message: " Impossible de trouver les informations"});
			}
		})
	})
	request.on('error', printer.printError)
}
module.exports.get = get;
