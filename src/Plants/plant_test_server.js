const WebSocket = require('ws');

const port = 8000;

const wss = new WebSocket.Server({port: port});

function limitValues(value, min, max) {
  // Ensure min is less than or equal to max
  if (min > max) {
    [min, max] = [max, min]; // Swap values if needed
  }
  return Math.min(Math.max(value, min), max);
}


wss.on('connection', function connection(ws) {
    console.log('Client connected!');
    //This simulates sending data every 2 seconds
    setInterval(() => {
        const data = {
            Temperature: Math.random() * 60,
            Humidity: Math.random() * 60,
            light: Math.random()* 50
        };
        ws.send(JSON.stringify(data));
        console.log ('Sent data:', data);
    }, 2000);

    ws.onerror = function error(error) {
        console.error('WebSocket error:', error);
    };
});

console.log('WebSocket server listening on port', port);

