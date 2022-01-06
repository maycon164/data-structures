const mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], (err, data) => {

	for(let i in data){
		console.log(data[i])
	}
})
