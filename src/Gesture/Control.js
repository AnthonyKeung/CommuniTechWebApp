import "./Control.css"
import {useState} from 'react';
import camera from "../Mood/camera"
import ToggleButtons from "./ToggleButton"


function Control() {
    const control_URL = process.env.REACT_APP_GESTURE + '/video_feed';
    const [selectedControlMethod, setSelectedControlMethod] = useState("gesture");
    const handleControlMethodChange = (newControlMethod) => {
        setSelectedControlMethod(newControlMethod);
    };
    return (
        <div>
            <div>
                <h1 className="plantTitle" style={{color: "black"}}>Navigation</h1>
            </div>
            <div className="control--method-container">
                {selectedControlMethod === 'gesture'
                    && <div>
                        <h2 className="title" style={{color: "black"}}> Gesture Feed</h2>
                        {camera(control_URL)}
                    </div>}
                {selectedControlMethod === 'wallTouch'
                    && <div>
                        <h2 className="title" style={{color: "black"}}>Wall Touch </h2>
                        <img src={require("./static/Arrows.png")} alt="Arrow Controls" className="arrow"/>
                    </div>
                }
            </div>
            <div className="Toggle-Container">
                <ToggleButtons onControlMethodChange={handleControlMethodChange}/>
            </div>
        </div>
    )
}

export default Control