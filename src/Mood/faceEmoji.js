import "./faceEmoji.css"
import {useState, useEffect} from 'react';

function FaceEmoji() {
    const [sadBackground, setSadBackground] = useState('transparent');
    const [neutralBackground, setNeutralBackground] = useState('transparent');
    const [HappyBackground, setHappyBackground] = useState('transparent');
    const current_emotion_URL = process.env.REACT_APP_MY_DEV_MOOD_URL + '/current_emotion';

    useEffect(() => {
        setInterval(() => {
            fetch(current_emotion_URL, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    const mood = data.emotion;
                    if (mood === "Null") {
                        setSadBackground('transparent')
                        setNeutralBackground('transparent')
                        setHappyBackground('transparent')
                    } else if (mood === "Sad") {
                        setSadBackground('#EDE599')
                        setNeutralBackground('transparent')
                        setHappyBackground('transparent')
                    } else if (mood === "Neutral") {
                        setSadBackground('transparent')
                        setNeutralBackground('#EDE599')
                        setHappyBackground('transparent')
                    } else if (mood === "Happy") {
                        setSadBackground('transparent')
                        setNeutralBackground('transparent')
                        setHappyBackground('#EDE599')
                    }
                })
                .catch(console.error)
        }, 500);
    },);
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