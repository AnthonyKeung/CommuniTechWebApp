import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons({onControlMethodChange}) {
    const [controlMethod, setControlMethod] = useState('gesture');

    const handleControlMethod = (event, newControlMethod) => {
        if (newControlMethod !== null) {
            setControlMethod(newControlMethod);
            onControlMethodChange(newControlMethod)
        }
    };

    return (
        <ToggleButtonGroup
            value={controlMethod}
            exclusive
            onChange={handleControlMethod}
            style={{
                backgroundColor: '#7ED348', // Set background color
            }}
        >
            <ToggleButton value="gesture">
                <h1>Gesture</h1>
            </ToggleButton>
            <ToggleButton value="wallTouch">
                <h1>Wall Touch</h1>
            </ToggleButton>
        </ToggleButtonGroup>
    );
}