import "./moodGraph.css"

import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';
import {useState, useEffect} from 'react';

const MoodGraph = () => {
    const [graphData, setGraphData] = useState([]);
    useEffect((graphData) => {
        const ws = new WebSocket('ws://localhost:8000/');
        ws.onopen = function open() {
            console.log('WebSocket connection opened!');
        };
        const newDataPoints = []
        ws.onmessage = function incoming(message) {
            const data = JSON.parse(message.data)
            const newDataPoint = {
                time: data["Date"],
                mood: data["Happiness"]
            }
            newDataPoints.push(newDataPoint)
            setGraphData(newDataPoints);
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
    }, []);
    return (
    <LineChart
      width={900}
      height={300}
      data={graphData}
      animationDuration={0}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="mood"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" stroke="black" />
    </LineChart>
    );
}


export default MoodGraph;
