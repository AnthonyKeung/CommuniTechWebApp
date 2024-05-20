import "./Control.css"
import {useState} from 'react';
import camera from "../Mood/camera"
import ToggleButtons from "./ToggleButton"


function Control() {
    const [selectedControlMethod, setSelectedControlMethod] = useState("gesture");
    const handleControlMethodChange = (newControlMethod) => {
        setSelectedControlMethod(newControlMethod);
    };
    return (
        <div>
            <div>
                <h1 className="plantTitle" style={{color: '#C7A003'}}>Navigation</h1>
            </div>
            <div className="control--method-container">
                {selectedControlMethod === 'gesture'
                    &&
                    <div>
                        <h2 className="title" style={{color: '#C7A003'}}> Gesture Feed</h2>
                        {camera()}
                    </div>}
                {selectedControlMethod === 'wallTouch'
                    && <h2 className="title" style={{color: '#C7A003'}}>Wall Touch </h2>
                }
            </div>
            <div className="Toggle-Container">
                <ToggleButtons onControlMethodChange={handleControlMethodChange}/>
            </div>
        </div>
    )
}

export default Control