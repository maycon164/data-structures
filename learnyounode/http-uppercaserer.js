const http = require('http');

http.createServer((req, res) => {
	if(req.method == 'POST'){
		let message = "";
		
		req.on("data", chunk => {
			message += chunk

		});	

		req.on("end", () => {
			res.write(message.toUpperCase());
			res.end();
		});
	}

}).listen(process.argv[2]);

