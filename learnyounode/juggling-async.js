const http = require('http');

function getData(url){

	return new Promise((resolve, reject) => { 
		let chunks = [];
		http.get(url, response => {
		
			response.on("data", data => {
				chunks.push(data.toString());
			});
		
			response.on("end", () => {
				resolve(chunks.join(""))
			});
		});
	});
}


async function showStrings(){

	for(let i = 2; i < process.argv.length; i++){
		let string = await getData(process.argv[i]);
		console.log(string)
	}
}

showStrings();

