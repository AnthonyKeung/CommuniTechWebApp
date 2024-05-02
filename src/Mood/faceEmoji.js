import "./faceEmoji.css"

function faceEmoji() {
  return (
    <div className="emojiContainer">
      <img src={require("./static/sadFace.png")} alt="sad" />
      <img src={require("./static/neutralFace.png")} alt="neutral" />
      <img src={require("./static/smileyFace.png")}alt="Happy" />
    </div>
  );
}

export default faceEmoji;