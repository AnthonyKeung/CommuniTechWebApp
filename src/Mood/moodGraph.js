import "./moodGraph.css"

import {Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {useEffect, useState} from 'react';

const MoodGraph = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect((graphData) => {
        const current_emotion_URL = process.env.REACT_APP_MY_DEV_MOOD_URL + '/current_emotion'
        let sadCounter = 0;
        let neutralCounter = 0;
        let happyCounter = 0;
        let otherCounter = 0;

        setInterval(() => {
            fetch(current_emotion_URL, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data["emotion"] === "Sad") {
                        sadCounter++;
                    } else if (data["emotion"] === "Neutral") {
                        neutralCounter++
                    } else if (data["emotion"] === "Happy") {
                        happyCounter++;
                    } else {
                        otherCounter++;
                    }
                    const newGraphData = [
                        {
                            Emotion: "Sad",
                            amt: sadCounter
                        },
                        {
                            Emotion: "Neutral",
                            amt: neutralCounter
                        },
                        {
                            Emotion: "Happy",
                            amt: happyCounter
                        }
                    ];
                    setGraphData(newGraphData);
                })
                .catch(console.error)
        }, 500);
    }, []);
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={graphData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="Emotion"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="amt" fill="#7ED348" activeBar={<Rectangle fill="pink" stroke="blue"/>}/>
            </BarChart>
        </ResponsiveContainer>
    );
}


export default MoodGraph;
