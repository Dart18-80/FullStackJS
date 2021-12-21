import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import clienteAxios from './config/axios';

//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  //State de la app 
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect(() =>{
    if(consultar){
      const consultarAPI = () =>{
        clienteAxios.get('/pacientes')
          .then(respuesta =>{
            //Colocar en el state el resultado
            guardarCitas(respuesta.data)

            //Deshabilitar la consulta
            guardarConsultar(false);

          })
          .catch(error =>{
            console.log(error);
          })
      }
      consultarAPI();
    }
  }, [consultar] );

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Pacientes citas={citas}/>} />
        <Route path="/nueva" element={<NuevaCita guardarConsultar={guardarConsultar} />} />
        <Route exact path="/cita/:id" element={<Cita citas={citas}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
