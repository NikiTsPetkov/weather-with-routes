const Cards = ({day}) =>{
    return(
        <div className="weather-card">
            <h3>{day.day.mintemp_c} °C / {day.day.maxtemp_c} °C</h3>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <h4>{day.day.condition.text}</h4>
            <p>{day.date}</p>
        </div>
    )
}

export default Cards;