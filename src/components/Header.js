import Loader from "./Loader"
import {useNavigate, useLocation} from 'react-router-dom'

const Header = ({location,isLoading}) => {

const address = useLocation()
const history = useNavigate()
    function handleClick(e) {
        e.preventDefault();
        history('/');
    }

    return(
        <>
        {address.pathname==='/'?"":<button onClick={handleClick} className="back">home</button>}
        {location&&!isLoading?<h1 className="weather-city">The weather in {location.region}</h1>:<Loader/>}
        </>
    )
}

export default Header