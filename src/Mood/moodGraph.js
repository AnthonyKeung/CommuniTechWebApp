import Paper from '@material-ui/core/Paper';
import "./moodGraph.css"

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {useState, useEffect} from 'react';

const MoodGraph = () => {
    const [graphData, setGraphData] = useState([
        {x: new Date(), value: 1},
        {x: new Date(), value: 2},
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
                {argument: 'White', value: 100 - newNumber}
            ];
            setGraphData(updatedGraphData)
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
    }, []);
    return (
        <Chart data={data}>
            <ArgumentScale type="time"/>
            <ValueScale max={3}/>
            <Grid/>
            <XAxis title="Time"/>
            <YAxis title="Value"/>
            <Line color="blue" width={2}/>
        </Chart>
    );
}


export default PlantGraph;
