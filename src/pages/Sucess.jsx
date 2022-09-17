import React from 'react'
import { useLocation } from 'react-router-dom'

const Sucess = () => {

    const location = useLocation()

    console.log("EL LOCATION!",location)

  return (
    <div>Relizado</div>
  )
}

export default Sucess