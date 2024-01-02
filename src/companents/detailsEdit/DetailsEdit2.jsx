import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Stack from '@mui/joy/Stack';
import { useEffect, useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DetailsStore from '../../store/DetailsStore';
import { observer } from "mobx-react";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const DetailsEdit2 = (observer((props) => {
  const checkisStart = () => {
    console.log("detailsedit2 ",details)
    if (DetailsStore.detailsEdit.id === '' || DetailsStore.detailsEdit.name === '') {
      // const [details, setDetails] = useState({
      //   id: DetailsStore.detailsEdit2.id,
      //   name: DetailsStore.detailsEdit2.name,
      //   address: DetailsStore.detailsEdit2.address,
      //   phone: DetailsStore.detailsEdit2.phone,
      //   owner: DetailsStore.detailsEdit2.owner,
      //   logo: DetailsStore.detailsEdit2.logo,
      //   description: DetailsStore.detailsEdit2.description,
      // })
      return false

    }
    return true
      //   details.id=DetailsStore.detailsEdit2.id,
      //   details.name = DetailsStore.detailsEdit2.name,
      //   details.address = DetailsStore.detailsEdit2.address,
      //   details.phone = DetailsStore.detailsEdit2.phone,
      //   details.owner = DetailsStore.detailsEdit2.owner,
      //   details.logo = DetailsStore.detailsEdit2.logo,
      //   details.description = DetailsStore.detailsEdit2.description
      // }
  };
  const [details, setDetails] = useState({
    id: DetailsStore.detailsEdit.id,
    name: DetailsStore.detailsEdit.name,
    address: DetailsStore.detailsEdit.address,
    phone: DetailsStore.detailsEdit.phone,
    owner: DetailsStore.detailsEdit.owner,
    logo: DetailsStore.detailsEdit.logo,
    description: DetailsStore.detailsEdit.description,
  })
  const x=checkisStart()
  if(x===false)
  {
        details.id=DetailsStore.detailsEdit2.id,
        details.name = DetailsStore.detailsEdit2.name,
        details.address = DetailsStore.detailsEdit2.address,
        details.phone = DetailsStore.detailsEdit2.phone,
        details.owner = DetailsStore.detailsEdit2.owner,
        details.logo = DetailsStore.detailsEdit2.logo,
        details.description = DetailsStore.detailsEdit2.description
  }
  


  
  const handleChangeDetails = (event) => {
    const { name, value } = event.target;
    setDetails({ ...details, [name]: value });
    console.log(name)
    console.log(value)
  };
  //   const x={
  //     id: "1",
  //     name: "דמותג",
  //     description: "דמות שתלווה אותכם לכל אורך הדרך, בכל הווראיציות",
  //     price: 500,
  //     duration: 60,
  // };
  const [open, setOpen] = React.useState(false);
  // useEffect(() => {
  //   checkisStart()
  //   console.log()
  // }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  // const handleClose = async () => {
  //   console.log(service)
  //   const response = await fetch("http://localhost:8787/service", {
  //           method: "POST",
  //           body: JSON.stringify(service),
  //           headers: {
  //               "Content-Type": "application/json"
  //           },
  //       });
  //       console.log("after post")
  //   setOpen(false);

  // };
  const handleClose = () => {
    props.setisEdit(false)
    setOpen(false)

  }
  const save = () => {
    // debugger
    DetailsStore.saveDetails(details);
    handleClose()
  }

  useEffect(() => {
    handleClickOpen();
    console.log("inside use effect")
  }, []);
  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          add new service!
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
        <DialogContent dividers>

          <Typography gutterBottom>
            <Stack spacing={2}>
              <TextField
                id="id"
                label="id"
                name="id"
                value={details.id}
                onChange={handleChangeDetails}
              />
              <TextField
                id="name"
                label="name"
                name="name"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                value={details.name}
                onChange={handleChangeDetails}
              />
              <TextField
                id="address"
                label="address"
                name="address"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                value={details.address}
                onChange={handleChangeDetails}
              />
              <TextField
                id="phone"
                label="phone"
                name="phone"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                value={details.phone}
                onChange={handleChangeDetails}
              />
              <TextField
                id="owner"
                label="owner"
                name="owner"
                value={details.owner}
                onChange={handleChangeDetails}
              />
              <TextField
                id="logo"
                label="logo"
                name="logo"
                value={details.logo}
                onChange={handleChangeDetails}
              />
              <TextField
                id="description"
                label="description"
                name="description"
                value={details.description}
                onChange={handleChangeDetails}
              />
            </Stack>

          </Typography>

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={save}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}))
export default DetailsEdit2