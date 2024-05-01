import Paper from '@material-ui/core/Paper';
import "./Plant_graph.css"
import {
    Chart,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui'

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
                className="background"
            >
                <PieSeries
                    valueField="value"
                    argumentField="argument"
                    innerRadius={0.4}/>
                <Title text={"Plant " + plantInfo} />
            </Chart>
        </Paper>
    );
}


export default PlantGraph;
