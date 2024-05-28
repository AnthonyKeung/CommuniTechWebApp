import PlantGraph from "./plant_graph"
import "./PlantHealth.css";
import {Button} from "@mui/material";

const PlantHealth = () => {
    return (
        <div>
            <h1 className="plantTitle" style={{color: "black"}}>Plant Health</h1>
            <Button variant="contained">Water Plant </Button>
            <div className="graphs-container">
                <div className = 'graph-container'>
                    <PlantGraph plantInfo="Temperature"/>
                </div>
                <div className = 'graph-container'>
                    <PlantGraph plantInfo="Humidity"/>
                </div>
                <div className = 'graph-container'>
                    <PlantGraph plantInfo="light"/>
                </div>
            </div>
        </div>
    );
}

export default PlantHealth;

