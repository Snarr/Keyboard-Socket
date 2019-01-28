const net = require('net');
const readline = require('readline');

let port = 5801
let ip = '10.16.40.2'
// let ip = '127.0.0.1'

let client = new net.Socket();

// net.createServer(function (socket) {

// 	// Identify this client
// 	socket.name = socket.remoteAddress + ":" + socket.remotePort 
  
// 	// Handle incoming messages from clients.
// 	socket.on('data', function (data) {
// 		console.log(data.toString('utf8'));
// 	});
  
// 	// Remove the client from the list when it leaves
// 	socket.on('end', function () {
// 	  clients.splice(clients.indexOf(socket), 1);
// 	});
  
// }).listen(5800);

client.connect(port, ip, function() {
	console.log('Connected');
});

client.on('error', error => {
	console.error;
})

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
	process.exit();
  } else {
	// console.log(key.name);
	client.write(key.name);
  }
});
console.log('Press any key...');