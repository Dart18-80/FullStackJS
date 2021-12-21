import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = ({citas}) => {

    if(citas.length === 0){
        window.location.href = "http://localhost:3000/";
    }
    const paths = window.location.pathname.split('/');
    const id = paths[paths.length-1];
    const citaCompleta = citas.filter(cita => cita._id === id);

    const eliminarCita = id =>{
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Una Cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                //Alerta de eliminado 
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )

                //Eliminado de la base de datos 
                clienteAxios.delete(`/pacientes/${id}`)
                    .then(respuesta => {
                        window.location.href= "http://localhost:3000/";
                    })
                    .catch(error => {
                        console.log(error);
            });
            }
          })
    }
    return ( 
        <Fragment>
            <h1 className='mt-4 py-4'> Nombre cita: {citaCompleta[0].nombre}</h1>
            <div className='container mt-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5 d-flex justify-content-center'>
                        <Link to={'/'} className='btn btn-success text-uppercase py-2 px-5 font-weight-bold'>Volver</Link>
                    </div>
                    <div className='col-md-8 mx-auto'>
                        <div className='list-group'>
                            <div className='p-5 list-group-item list-group-item-action flex-column align-items-center'>
                            <div className='d-flex w-100 justify-content-between mb-4'>
                                <h3 className='mb-3'>{citaCompleta[0].nombre}</h3>
                                <small className='fecha-alta'>
                                    {citaCompleta[0].fecha} - {citaCompleta[0].hora}
                                </small>
                                </div>
                                <p className='mb-0'>
                                    {citaCompleta[0].sintomas}
                                </p>
                                <div className='contacto py-3'>
                                    <p> Dueño: {citaCompleta[0].propietario}</p>
                                    <p> Telefono: {citaCompleta[0].telefono}</p>
                                </div>
                                <div className='d-flex'>
                                    <button type='button' className='text-uppercase py-2 px-5 font-weight-bold btn btn-danger col' onClick={() => eliminarCita(citaCompleta[0]._id)}>
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Cita;