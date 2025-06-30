export function Note(){
    return(
        <article>
            <div className="image-section">
                <img className="location-image" src="/public/Rectangle 77.png"/>
            </div>
            <div className="information-section">
                <div className="note-location">
                    <div className="marker-section">
                        <img src="public/marker.png"/>
                        <p>JAPAN</p>
                    </div>
                    <a href="#">View on Google Maps</a>
                </div>
                <h1 className="location-title">Mount Fuji</h1>
                <h3 className="dates">12 Jan, 2023 - 24 Jan, 2023</h3>
                <p className="location-text">
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                    Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </article>
    )
}