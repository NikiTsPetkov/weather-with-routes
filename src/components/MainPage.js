import Button from './Button'

const MainPage = () =>{
    return(
        <>
            <div className="weather-forecast">
                <Button text='The weather for today' link='/one-day'/>
                <Button text='The weather for next three days' link='/three-days'/>
            </div>
        </>
    )
}

export default MainPage