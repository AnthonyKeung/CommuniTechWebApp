const WebSocket = require('ws');

const port = 8000;

const wss = new WebSocket.Server({port: port});


wss.on('connection', function connection(ws) {
    console.log('Client connected!');
    //This simulates sending data every 2 seconds
    setInterval(() => {
        const data = {
            Temperature: Math.random() * 30,
            Humidity: Math.random() * 100,
            light: Math.random()* 10,
            Happiness: Math.floor(Math.random()*4)
        };
        ws.send(JSON.stringify(data));
        console.log ('Sent data:', data);
    }, 2000);

    ws.onerror = function error(error) {
        console.error('WebSocket error:', error);
    };
});

console.log('WebSocket server listening on port', port);

