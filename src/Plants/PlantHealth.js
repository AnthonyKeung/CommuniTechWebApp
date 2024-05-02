import PlantGraph from "./plant_graph"
import "./PlantHealth.css";

const PlantHealth = () => {
    return (
        <div>
            <h1 className="plantTitle" style={{color: '#C7A003'}}>Plant Health</h1>
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

