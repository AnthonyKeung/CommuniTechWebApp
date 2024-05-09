import "./Cursor.css"
import {useEffect, useState} from 'react';

function Cursor() {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const {keyCode} = event;
            let newX = cursorX;
            let newY = cursorY;

            switch (keyCode) {
                case 37: // Left arrow
                    newX -= 1; // Adjust movement amount as needed
                    break;
                case 38: // Up arrow
                    newY -= 1;
                    break;
                case 39: // Right arrow
                    newX += 1;
                    break;
                case 40: // Down arrow
                    newY += 1;
                    break;
                default:
                    break;
            }
            if (newX >= 0 && newX <= 97 && newY >= 0 && newY <= 97) {
                console.log(newX, newY)
                setCursorX(newX);
                setCursorY(newY);
            }

        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [cursorX, cursorY]);

    return (
        <div style={{width: '10px', height: '150px'}}>
            <img src={require("./static/pointer.png")}
                 alt="pointer"
                 style={{
                     position: "absolute",
                     top: cursorY + '%',
                     left: cursorX + '%',
                     width: '3%',
                     height: 'auto'
                 }}/>
        </div>

    )
}

export default Cursor