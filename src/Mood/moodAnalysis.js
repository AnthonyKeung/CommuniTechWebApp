import "./moodAnalysis.css";
import FaceEmoji from "./faceEmoji";
import camera from "./camera"
import MoodGraph from "./moodGraph";

function MoodAnalysis() {
    const mood_URL = process.env.REACT_APP_MY_DEV_MOOD_URL + '/video_feed';
    return (
        <div className="mood-container">
            <div>
                <h1 className="title" style={{color: "black"}}>Mood Analysis</h1>
            </div>
            <div className="emoji-container">
                {FaceEmoji()}
            </div>
            <div className="mood-graph-container">
                {MoodGraph()}
            </div>
            <div className="videofeed-container">
                <h1 className="title" style={{ color: "black" }}>Live Streaming</h1>
                {camera(mood_URL)}
            </div>
        </div>
    );
}

export default MoodAnalysis;