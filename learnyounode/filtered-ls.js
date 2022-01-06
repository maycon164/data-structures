const fs = require('fs')

fs.readdir(process.argv[2], (error, list) => {

	if(error){
		console.error(error);	
		return;
	}

	for(let i in list){
		if(list[i].includes("."+process.argv[3])){
			console.log(list[i])
		}
	}
})
