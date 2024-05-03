import "./moodAnalysis.css";
import FaceEmoji from "./faceEmoji";
import camera from "./camera"

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
                <h1>smiley graph</h1>
            </div>
            <div className="videofeed-container">
                {camera()}
            </div>
        </div>
    );
}

export default MoodAnalysis;