const net = require('net');
const fs = require('fs');

const streamDeckDeckApi = require('stream-deck-api');
var streamDeck = streamDeckApi.getStreamDeck();

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

	streamDeck.on('down', (buttonNumber) => {
		client.write(buttonNumber);
	});

	console.log('Press any key...');
}