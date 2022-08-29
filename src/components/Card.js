const Card = ({current}) =>{
    return(
        <div className="weather-card">
            <h3>{current.condition.text} / {current.temp_c} °C</h3>
            <img src={current.condition.icon} alt={current.text} />
            <p>last updated: {current.last_updated}</p>
        </div>
    )
}

export default Card;