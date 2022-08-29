import { useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import MainPage from './components/MainPage';
import OneDay from './components/OneDay';
import ThreeDays from './components/ThreeDays';

function App() {
  const [lat,setLat] = useState(null)
  const [long,setLong] = useState(null)
  const [data,setData]= useState({})
  const [isLoading,setIsLoading] = useState(false)

  let getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  getPosition()
    .then((position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
      console.log(lat,long)
    }).catch((err) => {
      console.error(err.message);
    })

useEffect(() =>{
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4d8f50548bmsh5548bbfc35c7566p1e986ajsn226b28c0729b',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
    setIsLoading(true)
    fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${long}&days=3`, options)
    .then(response => response.json())
    .then(response => {
    console.log(response)
    setData(response)
    setIsLoading(false)}
    )
    .catch(err => console.error(err))
},[lat,long])

  return (
    <div className="weather">
      <Header location={data.location} isLoading={isLoading}/>
      <Routes>
        <Route path='/' element={<MainPage location={data.location} isLoading={isLoading}/>}/>
        <Route path='/one-day' element={<OneDay current={data.current} />}/>
        <Route path='/three-days' element={<ThreeDays forecast={data.forecast} />}/>
      </Routes>
    </div>
  )
}
export default App;
