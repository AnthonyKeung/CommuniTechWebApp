import './PlantHealth.css';

const ws = new WebSocket('ws://localhost:8000/')
    ws.onopen = function open() {
    console.log('WebSocket connection opened!');
};

ws.onmessage = function incoming(message){
    const data = JSON.parse(message.data);
    console.log ('Received data:', data);
};

ws.onerror = function error(error) {
  console.error('WebSocket error:', error);
};

function plantHealth() {
    console.log("Maybe it'll work here")
    return (
        <h1 style={{ color: '#C7A003' }} > Plant Health</h1>
    );
}

export default plantHealth;
