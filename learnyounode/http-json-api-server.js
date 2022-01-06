const http = require('http');
const url = require('url');


http.createServer((req, res) => {
	
	if(req.method == "GET"){
		res.writeHead(200, {'Content-Type': 'application/json'});

		let path = url.parse(req.url)
		let data = path.path.slice(path.path.indexOf("=")+1);
	
		let json;

		if(path.path.includes("unixtime")){

			json = JSON.stringify(getJson(false, data));
		
		}else{
			json = JSON.stringify(getJson(true, data));
		
		}

		return res.write(json);

	}


}).listen(process.argv[2]);


function getJson(type, string){
	let data = new Date(string);

	let json = {
		hour: data.getHours(),
		minute: data.getMinutes(),
		second: data.getSeconds()
	}

	if(type){
		return json;
	}else{
		return {unixtime: data.getTime()};
	}

}
