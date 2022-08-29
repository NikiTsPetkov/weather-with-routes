import { Link } from "react-router-dom"

const Button = ({text,link}) => {
    return(
        <button className="weather-btn">
           <Link to={link}>{text}</Link> 
        </button>
    )
}
export default Button