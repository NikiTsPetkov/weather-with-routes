const Cards = ({day}) =>{
    return(
        <div className="weather-card weather-three-days">
            <div className="small-screen">
                <h3>{day.day.mintemp_c} °C / {day.day.maxtemp_c} °C</h3>
                <img src={day.day.condition.icon} alt={day.day.condition.text} />
            </div>
            <div className="small-screen">
                <h4>{day.day.condition.text}</h4>
                <p>{day.date}</p>
            </div>
        </div>
    )
}

export default Cards;
