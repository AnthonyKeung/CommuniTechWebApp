import "./camera.css"

function camera(video_URL) {
    return (
        <div className="container">
            <div className="row">
                <div class="col-lg-8  offset-lg-2">
                    <img src={video_URL} width="100%" alt="Video not showing"/>
                </div>
            </div>
        </div>

)
};

export default camera