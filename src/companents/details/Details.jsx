import MyStore from "../../store/MyStore";
import * as React from 'react';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from "react";
import { observer } from "mobx-react";

import DetailsStore from "../../store/DetailsStore";
import DetailsEdit from "../detailsEdit/DetailsEdit";
import DetailsEditcopy from "../detailsEdit/DetailsEditcopy";
// import logo from DetailsStore.detailsEdit.logo;
import logo from "../../assets/logo.jpg";
import DetailsEdit2 from "../detailsEdit/DetailsEdit2";

const Details = (observer((props) => {
    // const [details, setDetails] = useState(DetailsStore.detailsEdit)
    const [isEdit, setisEdit] = useState(false)
    // const [isSaved, setIsSaved] = useState(false)
    const render = () => {
        details.id = DetailsStore.detailsEdit.id
        details.name = DetailsStore.detailsEdit.name
        details.address = DetailsStore.detailsEdit.address
        details.description = DetailsStore.detailsEdit.description
        details.phone = DetailsStore.detailsEdit.phone
        details.owner = DetailsStore.detailsEdit.owner
        details.logo = DetailsStore.detailsEdit.logo

    }
    // useEffect(()=>{
    //     DetailsStore.getDetails()
    //     render()
    //     setDetails(DetailsStore.detailsEdit)

    // },[]);
    useEffect(() => {
        // debugger
        // if(!DetailsStore.isEditBefore){
        //     DetailsStore.initDetails();
        //     DetailsStore.setisEditBefore(true)
        // }
        // if()
        // else
        DetailsStore.getDetails();
        console.log("the details from get!!!!" ,DetailsStore.detailsEdit.id)
        // debugger
        // if(DetailsStore.detailsEdit.id==="_"){
        //     // debugger
        //     DetailsStore.initDetails()
        // }
        console.log("after get useEffect", DetailsStore.detailsEdit)
        // setDetails(DetailsStore.detailsEdit)
        // render()
        // console.log("after get useEffect22222", details.id)
    }, []);
    // const details=Details.detailsEdit;
    return (
        <>
            <img src={logo} alt="react logo" style={{ width: '400px', }} />
            {/* <div>{details.id} </div>
            <div>{details.name}</div>
            <div>{details.address}</div>
            <div>{details.phone}</div>
            <div>{details.owner}</div> */}
            {/* <img src={details.logo} /> */}
            {/* <div>{details.descreption}</div> */}
            {/*--------------*/}
            {console.log("print????")}
            <div>{DetailsStore.detailsEdit.id} </div>
            <div>{DetailsStore.detailsEdit.name}</div>
            <div>{DetailsStore.detailsEdit.address}</div>
            <div>{DetailsStore.detailsEdit.phone}</div>
            <div>{DetailsStore.detailsEdit.owner}</div>
            <div>{DetailsStore.detailsEdit.description}</div>

            {MyStore.isAdmin && MyStore.isLogin ?
                <>
                    <Button variant="contained" onClick={() => setisEdit(true)} >
                        edit
                    </Button>
                    {isEdit ?
                        <DetailsEdit2 setisEdit={setisEdit} />
                        : <div></div>
                    }
                </>
                : <div></div>

            }
        </>
    )
}))
export default Details
