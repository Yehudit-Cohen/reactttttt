
import { useEffect, useState } from 'react';
import { observer } from "mobx-react"
import DetailsStore from '../../store/DetailsStore'
import './services.css'
import MyStore from '../../store/MyStore';
import Button from '@mui/material/Button';
// import addService from '../addService/addService';
import AddService from "../addService/AddService"
import ServiceStore from '../../store/ServiceStore';

const Services = (observer(() => {
    // const [data, setData] = useState([]);
    const [isOpen, SetIsOpen] = useState(false);
    // console.log("inside")
    // useEffect
    // const data?;
    // const addService=()=>{

    // }

    // const handleDetails = async () => {
    //     console.log()
    //     const response = await fetch("http://localhost:8787/service", {
    //         method: "POST",
    //         body: JSON.stringify(DetailsStore.servicesList[0]),
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });
    //     console.log("after post")

    //     const response1 = await fetch("http://localhost:8787/services", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //     });
    //     console.log("after get")

    //     const x = await response1.json();
    //     setData(x);

    //     console.log("data: ")
    //     console.log(x[0][0])
    //     console.log(data)
    // }
    useEffect(() => {
        ServiceStore.getServices()
        console.log("inside use effect")
    },[]);
    return (
        <>
            <div>the services:  </div>
            {
                ServiceStore.serviceArr.map((x1, key) => (//איפה שמים את ה-key
                    <>
                    {console.log(x1)}
                        <div className='oneService' key={x1.id}>
                            <h2>id: {x1.id}</h2>
                            <h2>name: {x1.name}</h2>
                            <h3>description: {x1.description}</h3>
                            <h3>price: {x1.price}</h3>
                            <h3>duration: {x1.duration}</h3>
                        </div>
                    </>
                ))
            }
            {MyStore.isAdmin ?
                <Button variant="contained" onClick={() => SetIsOpen(true)} >
                    add service
                </Button>
                : <>
                </>
            }
            {isOpen?
                <AddService setIsOpen={SetIsOpen}></AddService>//נפתח רק בפעם הראשונה
                :<></>
            }

        </>

    )

}))
export default Services
