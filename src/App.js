import React from "react";
import {Routes, Route} from 'react-router-dom'
import Contact from "./Pages/Contact";
import Task from "./Pages/Task";
import Todo from "./Pages/Todo";
import Home from "./Pages/Home";
import Header from "./Component/Header";




const App = () => {
  
return (
  <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Task" element={<Task/>}/>
          <Route path="/Todo" element={<Todo/>}/>
      </Routes>    
  </>
)
}
export default App;
