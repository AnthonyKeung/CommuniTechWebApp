import "./Plant_graph.css"
import {PieChart, Pie, Tooltip} from "recharts";


import {useState, useEffect} from 'react';

const PlantGraph = ({plantInfo}) => {
    const [Number, setNumber] = useState(null);
    const [graphData, setGraphData] = useState([
        {argument: {plantInfo}, value: null},
        {argument: 'White', value: 100 - Number},
    ]);
    useEffect((plantInfo) => {
        const ws = new WebSocket('ws://localhost:8000/');
        ws.onopen = function open() {
            console.log('WebSocket connection opened!');
        };

        ws.onmessage = function incoming(message) {
            const data = JSON.parse(message.data)
            const newNumber = data["Temperature"];
            setNumber(newNumber);

            const updatedGraphData = [
                {argument: {plantInfo}, value: newNumber},
                {argument: 'White', value: 100 - newNumber, fill: 'white'}
            ];
            setGraphData(updatedGraphData)
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
    }, []);
    return (
        <div style={{ backgroundColor: '#EDE599' }}>
            <h2>{plantInfo}</h2>
            <PieChart width={1000} height={400}>
                <Pie
                    dataKey="value"
                    data={graphData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={100}
                    fill="red"
                    animationDuration={500}
                />
                <Tooltip/>
            </PieChart>
        </div>

    );
}
export default PlantGraph;
