import './App.css';
import Cursor from "./Gesture/Cursor";
import PlantHealth from "./Plants/PlantHealth";
import MoodAnalysis from "./Mood/moodAnalysis";
import Control from "./Gesture/Control"

function App() {
    return (
        <div style={{width: '100%', height: '100%'}}>
            <Cursor/>
            <div className="plant">
                <PlantHealth/>
            </div>
            <div className="mood">
                <MoodAnalysis/>
            </div>
            <div className="control">
                <Control/>
            </div>
        </div>
    );
}

export default App;
