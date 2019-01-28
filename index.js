const net = require('net');
const readline = require('readline');
const fs = require('fs');

let config = {};

fs.readFile('config.json', 'utf8', (err, data) => {
	config = JSON.parse(data);
	connect();
})

function connect() {
	let client = new net.Socket();

	client.connect(config.port, config.ip, function() {
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
}