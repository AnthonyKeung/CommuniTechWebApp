import "./Plant_graph.css"
import {Pie, PieChart, Tooltip} from "recharts";

import {useEffect, useState} from 'react';


const PlantGraph = ({plantInfo}) => {
    const [graphData, setGraphData] = useState([
        {argument: {plantInfo}, value: null},
        {argument: 'White', value: null},
    ]);
    useEffect(() => {
        const ws = new WebSocket('ws://port:8000');
        ws.onopen = function open() {
            console.log('WebSocket connection opened!');
        };
        ws.onmessage = function incoming(message) {
            const data = JSON.parse(message.data);
            const updatedGraphData = [
                {argument: {plantInfo}, value: data[plantInfo]},
                {argument: 'White', value: 100 - data[plantInfo], fill: 'white'}
            ];
            setGraphData(updatedGraphData)
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
        return () => {
            ws.close();
        }
    },[]);
    return (
        <div style={{backgroundColor: '#7ED348'}}>
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
