import "./Control.css"
import camera from "../Mood/camera"
import ToggleButtons from "./ToggleButton"
function Control() {
    return (
        <div>
            <div>
                <h1 className="plantTitle" style={{color: '#C7A003'}}>Navigation</h1>
            </div>
            <div className="Gesture-videofeed-container">
                <h2 className="title" style={{ color: '#C7A003' }}>Gesture Feed</h2>
                {camera()}
            </div>
            <div className="Toggle-Container">
                <ToggleButtons/>
            </div>
        </div>
    )
}

export default Control