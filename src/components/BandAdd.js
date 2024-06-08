import React, { useContext, useState } from 'react'
import { SocketContext } from '../context/SocketContext'

export const BandAdd = () => {

  const [nombre, setNombre] = useState('')
  const { socket } = useContext( SocketContext )

  const onSubmit = (event) => {
    event.preventDefault()
    
    if ( nombre.trim().length > 0 ){
      socket.emit( 'crear-banda', { nombre }); 
    }

    setNombre('')
  
  }

  return (
    <>
        <h3>Agregar Banda</h3>

        <form onSubmit={ onSubmit }>
            <input 
                className='form=control'
                placeholder='Nuevo nombre de banda'
                value={ nombre }
                onChange={ (event ) => setNombre(event.target.value)}
            />    
        </form>  
    </>
  )
}
