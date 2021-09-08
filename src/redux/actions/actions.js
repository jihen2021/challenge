import axios from "axios";
import {GET_WEATHER_FAIL,GET_WEATHER_SUCCES,WEATHER_LOAD}from '../constants/weatherAction'

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "568520e1da16a930f4a832feacb99ff6";

export const getWeatherData = (cityname) => async (dispatch) => {
  dispatch({type:WEATHER_LOAD});
  try {
    const res = await axios.get(baseUrl+`q=${cityname}&appid=${apiKey}`);
    dispatch({ type:GET_WEATHER_SUCCES, payload: res.data });
  } catch (error) {
    dispatch({ type: GET_WEATHER_FAIL, payload: error });
  }
};
