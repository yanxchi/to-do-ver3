import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import TodoScreen from './screens/TodoScreen';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/home" element = {<Homepage/>}/>
        <Route path="/socials" element = {<Socials/>}/> */}
        <Route path="/todo" element = {<TodoScreen/>}/>
        {/* <Route path="/pomodoro" element = {<Pomodoro/>}/>
        <Route path="/diary" element = {<Diary/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
