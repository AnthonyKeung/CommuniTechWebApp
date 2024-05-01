import './App.css';
import PlantHealth from "./Plants/PlantHealth";
import moodAnalysis from "./Mood/moodAnalysis";

function App() {
    return (
        <div>
            <div className="plant">
                <PlantHealth/>
            </div>
            <div className="mood">
                {moodAnalysis()}
            </div>
        </div>
    );
}

export default App;
