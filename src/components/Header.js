import Loader from "./Loader"
import {useNavigate} from 'react-router-dom'

const Header = ({location,isLoading}) => {

const history = useNavigate()
    function handleClick(e) {
        e.preventDefault();
        history('/');
    }

    return(
        <>
        <button onClick={handleClick} className="back">home</button>
        {location&&!isLoading?<h1 className="weather-city">The weather in {location.region}</h1>:<Loader/>}
        </>
    )
}

export default Header