import { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Input from './component/input';
import Tareas from './component/tareas';



function App() {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const handleChange = (e) => {
    setTarea(e.target.value)

  }

const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      setTareas([...tareas, tarea]) 
      setTarea('')
    }

}


  return (
    <>
      <h1 id="titulo">TODO LIST.</h1>
      <div className="container ">

        <Input
         handleChange={handleChange}
         handleKeyDown={handleKeyDown}
         tarea={tarea} />

        <Tareas tareas={tareas} />

         </div>
    </>
  )
}

export default App
