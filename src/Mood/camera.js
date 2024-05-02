import "./camera.css"

function camera() {
    return (
        <div className="container">
            <div className="row">
                <div class="col-lg-8  offset-lg-2">
                    <h1 className="title" style={{ color: '#C7A003' }}>Live Streaming</h1>
                    <img src="http://localhost:5000/video_feed" width="100%" alt="Video not showing"/>
                </div>
            </div>
        </div>

)
};

export default camera