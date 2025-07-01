export function Note(props){
    return(
        <>
        <article>
            <div className="image-section">
                <img className="location-image" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div className="information-section">
                <div className="note-location">
                    <div className="marker-section">
                        <img src="/marker.png"/>
                        <p className="country-name">{props.country}</p>
                    </div>
                    <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h1 className="location-title">{props.title}</h1>
                <h3 className="dates">{props.dates}</h3>
                <p className="location-text">
                    {props.text}
                </p>
            </div>
        </article>
        <hr />
        </>
    )
}