import React from 'react'
import { TourType } from '../../Pages/Tours'


// Interface Extends
// https://www.w3schools.com/typescript/typescript_aliases_and_interfaces.php
interface TourProps extends TourType{
    handleTour: (id: string) => void
}

const TourComponent = ({id,name,info,image,price,handleTour}:TourProps) => {
  return (
    <div key={id}>
        <h1>{name}</h1>
        <p>{info}</p>
        <p>${price}</p>
        <button onClick={()=>handleTour(id)} >Not My Style</button>
    </div>
  )
}

export default TourComponent