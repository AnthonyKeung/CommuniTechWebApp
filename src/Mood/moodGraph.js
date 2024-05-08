import "./moodGraph.css"

import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';
import {useState, useEffect} from 'react';

const MoodGraph = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect((graphData) => {
        let mood = 0;
        const current_emotion_URL = process.env.REACT_APP_MY_DEV_MOOD_URL + '/current_emotion'
        const newDataPoints = [];
        setInterval(() => {
            fetch(current_emotion_URL, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data["emotion"] === "Sad"){
                        mood = 0;
                    }
                    else if (data["emotion"] === "Neutral"){
                        mood = 1;
                    }
                    else if (data["emotion"] === "Happy"){
                        mood = 2;
                    }
                    else {
                        mood = 3;
                    }

                    const newDataPoint = {
                        time: data.date,
                        mood: mood
                    };
                    newDataPoints.push(newDataPoint)
                    console.log(newDataPoints)
                    setGraphData(newDataPoints);
                })
                .catch(console.error)
        }, 2000);
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
