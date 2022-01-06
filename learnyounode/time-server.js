const net = require('net')
const port = process.argv[2]


const server = net.createServer(socket => {
	let date = getDateTime();
	socket.write(date+"\n");
	socket.end();
});

server.listen(port);

function getDateTime(){
	let d = [];
	let date = new Date();
	
	d.push(date.getFullYear().toString(),( date.getMonth() + 1).toString(), date.getDate().toString(), date.getHours().toString(), date.getMinutes());
	
	let month = d[1].length == 1? "0"+d[1]:d[1]	
	let day = d[2].length == 1? "0"+d[2]:d[2]

	return d[0] + "-" + month + "-" + day + " " + d[3] + ":" +d[4];

}

