const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

let server = http.createServer((req, res) => {
	
	let readStream = fs.createReadStream(file);
	
	readStream.on('open', () => {
		readStream.pipe(res)
	});
	
});

server.listen(port)
