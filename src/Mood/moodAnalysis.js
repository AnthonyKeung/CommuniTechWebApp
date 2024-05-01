import "./moodAnalysis.css";
import faceEmoji from "./faceEmoji";
import camera from "./camera"

function moodAnalysis(){
  return (
    <div>
        <div>
            <h1 className="title" style={{ color: '#C7A003' }}>Mood Analysis</h1>
        </div>
        <div className="videofeed-container">
            {camera()}
        </div>

        <div classname="faces">
            {faceEmoji()}
        </div>
    </div>
  );
}

export default moodAnalysis;