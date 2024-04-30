import './PlantHealth.css';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui'

import {useState, useEffect} from 'react';


const plantTemperature = () => {
    const [Number, setNumber] = useState(null);
    const [graphData, setGraphData] = useState([
        {argument: 'Temperature', value: null},
        {argument: 'White', value: 100 - Number},
    ]);
    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/');
        ws.onopen = function open() {
            console.log('WebSocket connection opened!');
        };

        ws.onmessage = function incoming(message) {
            const data = JSON.parse(message.data)
            const newNumber = data["Temperature"];
            setNumber(newNumber);

            const updatedGraphData = [
                {argument: 'Temperature', value: newNumber},
                {argument: 'White', value: 100 - newNumber}
            ];
            setGraphData(updatedGraphData)
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
    },[]);
    return (
        <Paper>
            <Chart
                data={graphData}
            >
                <PieSeries
                    valueField="value"
                    argumentField="argument"
                    innerRadius={0.6}/>
                <Title text="Plant Humidity"/>
            </Chart>
        </Paper>
    );
}


export default plantTemperature;
