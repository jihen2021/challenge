import React, { useEffect, useState } from "react";
import { getWeatherData } from '../redux/actions/actions'
import { useDispatch, useSelector } from "react-redux";
import { weReducer } from '../redux/reducers/weReducer';
import { TextField } from "@material-ui/core";


function WeatherApi() {
    const dispatch = useDispatch();
    const [cityname, setCityname] = useState('GAFSA');

    useEffect(() => {
  
      dispatch(getWeatherData(cityname));
  
    }, [cityname]);
  
    const data = useSelector((state) => state.weReducer.data);
    const load = useSelector((state) => state.weReducer.isLoading);


    return (
        <div>

<div className="card"></div>
    <div className="title">
      <i className="fa fa-cloud">Weither App</i>
    </div>

    <div className="search-form">
    <TextField id="standard-basic"  placeholder="enter your country"
        onChange={(e) => setCityname(e.target.value)} />
   
    </div>
    
  
    <div>
      {load ? (
        <h1>Loading ....</h1>
      ) : (
        <div>
           <div className="weither-icon">
           <img
            src={`http://openweathermap.org/img/w/${data.weather&&data.weather[0].icon}.png`}
            alt="non disponible"
          />
          </div>
         
          <h3>{data.weather&&data.weather[0].main}</h3>
          <div className="temperature">
            {/* affichage de la lemperature  */}
            <h1>{data.main&&parseInt(data.main.temp - 273.15)}&deg;C</h1>
          </div>
          <div className="location">
            <h3>
             
              <i className="fa fa-street-view"></i>
              {cityname}||{data.sys&&data.sys.country}
            </h3>
          </div>

          <div className="temperature-range">
            <h6>
              {data.main&&parseInt(data.main.temp_max - 273.15)}&deg;C ||{" "}
              {data.main&&parseInt(data.main.temp_min - 273.15)}&deg;C || humidity:
              {data.main&&data.main.humidity}%
            </h6>
          </div>
        </div>
      )}
    </div>
        </div>
    )
}

export default WeatherApi
