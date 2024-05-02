import "./moodAnalysis.css";
import faceEmoji from "./faceEmoji";
import camera from "./camera"

function moodAnalysis() {
    return (
        <div className="mood-container">
            <div>
                <h1 className="title" style={{color: '#C7A003'}}>Mood Analysis</h1>
                {faceEmoji()}
            </div>
            <div className="videofeed-container">
                {camera()}
            </div>

        </div>
    );
}

export default moodAnalysis;