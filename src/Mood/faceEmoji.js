import "./faceEmoji.css"
import {useState, useEffect} from 'react';

function FaceEmoji() {
    const [sadBackground, setSadBackground] = useState('transparent');
    const [neutralBackground, setNeutralBackground] = useState('transparent');
    const [HappyBackground, setHappyBackground] = useState('transparent');

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:8000/');
        ws.onopen = function open() {
            console.log('WebSocket connection opened!');
        };
        ws.onmessage = function incoming(message) {
            const data = JSON.parse(message.data)
            const mood = data["Happiness"];
            if (mood === 0) {
                setSadBackground('transparent')
                setNeutralBackground('transparent')
                setHappyBackground('transparent')
            } else if (mood === 1) {
                setSadBackground('#EDE599')
                setNeutralBackground('transparent')
                setHappyBackground('transparent')
            } else if (mood === 2) {
                setSadBackground('transparent')
                setNeutralBackground('#EDE599')
                setHappyBackground('transparent')
            } else if (mood === 3) {
                setSadBackground('transparent')
                setNeutralBackground('transparent')
                setHappyBackground('#EDE599')
            }
        };
        ws.onerror = function error(error) {
            console.error('WebSocket error:', error);
        };
    }, []);
    return (
        <div className="emojiContainer">
            <div>
                <div style={{backgroundColor: sadBackground}}>
                    <img src={require("./static/sadFace.png")} alt="sad"/>
                </div>
            </div>
            <div>
                <div style={{backgroundColor: neutralBackground}}>
                    <img src={require("./static/neutralFace.png")} alt="neutral"/>
                </div>
            </div>
            <div>
                <div style={{backgroundColor: HappyBackground}}>
                    <img src={require("./static/smileyFace.png")} alt="Happy"/>
                </div>
            </div>
        </div>
    );
}

export default FaceEmoji;