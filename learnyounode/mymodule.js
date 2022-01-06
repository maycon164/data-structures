const fs = require('fs')

module.exports = (path, ext, callback) => {
	fs.readdir(path,(error, data) => {
		if(error){
			callback(error);
			return;
		}
		
		let filteredFiles = [];
		
		for(let i in data){
			if(data[i].includes("."+ext)){
				filteredFiles.push(data[i]);
			}
		}

		callback(null, filteredFiles);
		
	});

}
