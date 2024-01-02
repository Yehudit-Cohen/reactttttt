// // import {  Link } from "react-router-dom"

// function GetServices() {
//     //### `GET /services`
//     const [services, setServices] = useState('')
//     console.log("try1!!!!")

//     const handleServices = async () => {
//         console.log('login');
//         const services1 = await fetch("http://localhost:8787/services", {
//             method: `GET /services`,
//             // body: JSON.stringify({
//             //   name, password
//             // }),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         console.log("try!!!!")
//         console.log(services1)

//         return (
//             <>
//                 <button onClick="handleServices" value="tryyyyyy"/> 
//             </>

//                 )
//     }
// }
//export default GetServices

import React, { useEffect, useState } from "react";

const GetServices = () => {
    const [users,setUsers] = useState([]);
  const getAllUser = async () => {
    const response = await fetch("http://localhost:8787",{
        method:  `GET /services`,
    });
    setUsers(await response.json());
    console.log(users);
};

    useEffect(() => {
      getAllUser();
    },[]);

    console.log(users)
    return (
      <>
      {/* { users.map((ce) => 
           <div key={ce.id}>
               <h2>{ce.name}</h2>
               <p>{ce.email}</p>

           </div>)} */}
           ftrgyujm,oypiuj
     </>
    )
  
}
     
       
export default GetServices;
