import DetailsStore from "../../store/DetailsStore";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
function DatailsEditcopy() {
    const [details2, setDetails] = useState({
        name: DetailsStore.detailsEdit.name,
        address: DetailsStore.detailsEdit.address,
        phone: DetailsStore.detailsEdit.phone
    })


    const func1 = (event) => {
        console.log("++++++++++++")
        console.log(event)

        setDetails({ ...details2, [event.target.id]: value });
        console.log("=================")
        console.log(details2.event.target.id)
        console.log("------------")
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setDetails({ ...details2, [name]: value });
        console.log(name)
        console.log(value)
    };

    const Save = () => {
        DetailsStore.detailsEdit.name=details2.name1;
        DetailsStore.detailsEdit.address=details2.address;
        DetailsStore.detailsEdit.phone=details2.phone;
        DetailsStore.setIsSave(true);
        console.log("1111111111111111111111111111111111111111111111111111111111");
        console.log(DetailsStore.detailsEdit.name);
    }
    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>

                    <TextField
                        id="name"
                        label="name"
                        name="name"
                        // placeholder="name"
                        // multiline
                        // defaultValue={details2.name}
                        value={details2.name1}
                        onChange={handleInputChange}
                    />
                     <TextField
                        id="address"
                        label="address"
                        name="address"
                        // placeholder="name"
                        // multiline
                        // defaultValue={details2.name}
                        value={details2.address}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="phone"
                        label="phone"
                        name="phone"
                        // placeholder="name"
                        // multiline
                        // defaultValue={details2.name}
                        value={details2.phone}
                        onChange={handleInputChange}
                    />
                    <TextField
                        id="descruption"
                        label="name"
                        name="name"
                        // placeholder="name"
                        // multiline
                        // defaultValue={details2.name}
                        value={details2.name1}
                        onChange={handleInputChange}
                    />

                </div>
                <Button variant="contained" onClick={Save()}>
                    save
                </Button>
                
            </Box>
        </>

    )
}


export default DatailsEditcopy
