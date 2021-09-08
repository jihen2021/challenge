
import React from "react";
import WeatherApi from "./component/WeatherApi";
import './App.css'
import Filtre from'./component/Filtre'
import AddList from './component/AddList'
import TodoList from './component/TodoList'
import TotalCompleteItems  from './component/TotalCompleteItems'
 
function App() {
 
  return (
    <div className='container'>
      <div className="weatherApi">
      <WeatherApi/>
      </div>
     
     <div className="todoList">
     <AddList />
     <Filtre/>
     <TodoList />
     <TotalCompleteItems/>
     </div>
    </div>
   
    
 
        
      );}
  

export default App;
