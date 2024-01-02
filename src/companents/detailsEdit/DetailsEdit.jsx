import DetailsStore from "../../store/DetailsStore";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
function DatailsEdit() {
    const [details2, setDetails] = useState(DetailsStore.detailsEdit)
    const Save = () => {
        DetailsStore.detailsEdit=details2;
        console.log("---------------------------------------");
        console.log(DetailsStore.detailsEdit.name);
    }
    const ChangeName = (event) => {
        const { name, value } = event.target;
        setDetails({ ...details2, [name]: value });
        console.log(details2.name)
    };
    const ChangePhone = (event) => {
        const { phone, value } = event.target;
        setDetails({ ...details2, [phone]: value });
        console.log(details2.phone)
    };
    const ChangeAddress = (event) => {
        const { address, value } = event.target;
        setDetails({ ...details2, [address]: value });
        console.log(details2.address)
    };
    const ChangeDes = (event) => {
        const { descreption, value } = event.target;
        setDetails({ ...details2, [descreption]: value });
        console.log(details2.descreption)
    };

    return (
        <>
            <form  className="Form">
                <div className="PopupsInput">
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={details2.name}
                        placeholder=" service Name"
                        onChange={ChangeName}
                        type="text"
                    />
                </div>
                <div className="PopupsInput">

                    <TextField
                        fullWidth
                        label="Address"
                        name="address"
                        value={details2.address}
                        placeholder="service Description"
                        onChange={ChangeAddress}
                        type="text"

                    />
                </div>

                <div className="PopupsInput">

                    <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={details2.phone}
                        placeholder="service Price"
                        onChange={ChangePhone}
                        type="text"

                    />
                </div>
                <div className="PopupsInput">

                    <TextField
                        fullWidth
                        label="Descraption"
                        name="Descraption"
                        value={details2.descreption}
                        placeholder="service Price"
                        onChange={ChangeDes}
                        type="text"

                    />
                </div>
                <Button variant="contained" onClick={Save()}>
                    save
                </Button>


            </form>

        </>

    )
}

export default DatailsEdit