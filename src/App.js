import './App.css';
import PlantHealth from "./Plants/PlantHealth";
import MoodAnalysis from "./Mood/moodAnalysis";

function App() {
    return (
        <div>
            <div className="plant">
                {/*<PlantHealth/>*/}
            </div>
            <div className="mood">
                {MoodAnalysis()}
            </div>
        </div>
    );
}

export default App;
