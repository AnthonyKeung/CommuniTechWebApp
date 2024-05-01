import "./faceEmoji.css"

function faceEmoji() {
  return (
    <div className="emojiContainer">
      <img src={require("C:\\Bath\\Year 3\\GDBP\\communitech_wall_app\\src\\Mood\\static\\sadFace.png")} alt="sad" />
      <img src={require("./static/neutralFace.png")} alt="neutral" />
      <img src={require("./static/smileyFace.png")}alt="Happy" />
    </div>
  );
}

export default faceEmoji;