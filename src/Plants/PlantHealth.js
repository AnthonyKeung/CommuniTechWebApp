import PlantGraph from "./plant_graph"
import "./PlantHealth.css";

const PlantHealth = () =>
{
    return(
        <div className="container">
            <PlantGraph plantInfo="Temperature"/>
            <PlantGraph plantInfo="Humidity"/>
            <PlantGraph plantInfo="light"/>
        </div>
    );
}

export default PlantHealth;