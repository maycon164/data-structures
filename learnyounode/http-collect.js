const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
	let chunks = [];

	response.on("data", data => {
		chunks.push(data.toString());
	})
	
	response.on("end", () => {
		let letters = 0;

		for(let i in chunks){
			letters += chunks[i].length
		}
		
		console.log(letters);
		console.log(chunks.join(""));
	});
});
