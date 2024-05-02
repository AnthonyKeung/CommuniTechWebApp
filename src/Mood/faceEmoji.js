import "./faceEmoji.css"

function faceEmoji() {
    return (
        <div className="emojiContainer">
            <div>
                <img src={require("./static/sadFace.png")} alt="sad"/>
                {/*<img className="tapered_square" src={require("./static/tapered_square.png")} alt="Square"/>*/}
            </div>
            <di>
                <img src={require("./static/neutralFace.png")} alt="neutral"/>
            </di>
            <div>
                <img src={require("./static/smileyFace.png")} alt="Happy"/>
            </div>
        </div>
    );
}
export default faceEmoji;