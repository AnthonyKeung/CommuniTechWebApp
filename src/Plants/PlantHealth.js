import PlantGraph from "./plant_graph"
import "./PlantHealth.css";

const PlantHealth = () => {
    return (
        <div>
            <h1 className="plantTitle">Plant Health</h1>
            <div className="container">
                <PlantGraph plantInfo="Temperature"/>
                <PlantGraph plantInfo="Humidity"/>
                <PlantGraph plantInfo="light"/>
            </div>
        </div>
    );
}

export default PlantHealth;

