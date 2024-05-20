import "./moodAnalysis.css";
import FaceEmoji from "./faceEmoji";
import camera from "./camera"
import MoodGraph from "./moodGraph";

function MoodAnalysis() {
    return (
        <div className="mood-container">
            <div>
                <h1 className="title" style={{color: '#C7A003'}}>Mood Analysis</h1>
            </div>
            <div className="emoji-container">
                {FaceEmoji()}
            </div>
            <div className="mood-graph-container">
                {MoodGraph()}
            </div>
            <div className="videofeed-container">
                <h1 className="title" style={{ color: '#C7A003' }}>Live Streaming</h1>
                {camera()}
            </div>
        </div>
    );
}

export default MoodAnalysis;