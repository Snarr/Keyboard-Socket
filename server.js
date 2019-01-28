const net = require('net');

let config = {};

fs.readFile('config.json', 'utf8', (err, data) => {
	config = JSON.parse(data);
})

net.createServer(function (socket) {

	// Identify this client
	socket.name = socket.remoteAddress + ":" + socket.remotePort 
  
	// Handle incoming messages from clients.
	socket.on('data', function (data) {
		console.log(data.toString('utf8'));
	});
  
	// Remove the client from the list when it leaves
	socket.on('end', function () {
	  clients.splice(clients.indexOf(socket), 1);
	});
  
}).listen(config.port);