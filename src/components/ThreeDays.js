import Cards from "./Cards"

const ThreeDays = ({forecast}) =>{
    return(
        <div className="weather">
            {forecast.forecastday.map(day=>(<Cards day={day} />))}
        </div>
    )
}

export default ThreeDays