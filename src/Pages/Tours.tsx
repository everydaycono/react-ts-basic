import React, { useEffect, useState } from "react"
import TourComponent from "../components/tour/Tour"
import tourList from "../utils/tour/tour.json"

export type TourType = {
    id: string
    name: string
    info: string
    image: string
    price: string
}

const Tours = () => {
    const [tours,setTours]=useState<TourType[]>([]);
    const [isLoading,setLoading]=useState(false);


    const handleTour=(id:string)=>{
        const newFilterTour=tours.filter(item=>item.id!==id);
        setTours(newFilterTour);
    }

    const getTourList=()=>{
        setLoading(true);
        try {
            setTimeout(() => {
                setTours(tourList);
                setLoading(false);
            }, 100);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        getTourList()
    },[])

    // Rendering

    if(isLoading && tours.length === 0 ){
        return(
            <h1>LOADING ...</h1>
        )
    }
    if(!isLoading && tours.length === 0 ){
        return(
            <div>
                <h1>No Tours</h1>
                <button onClick={getTourList} >Refetch</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Cono's Tour</h1>
            {tours.map(tour=>{
                return(<TourComponent key={tour.id} {...tour} handleTour={handleTour}/>)
            })}
        </div>
    )
}

export default Tours