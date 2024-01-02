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
import { useEffect,useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';
import DetailsStore from '../../store/DetailsStore';
import ServiceStore from '../../store/ServiceStore';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const AddServies = (observer((props) => {
  // const[id1,setId]=useState('');
  // const[name1,setName]=useState('');
  // const[description1,setDescription]=useState('');
  // const[price1,setPrice]=useState('');
  // const[duration1,setDuration]=useState('');

  const [service, setService] = useState({
    id:"",
    name:"",
    description:"",
    price:"",
    duration:"",
})


  const handleChangeService = (event) => {
    const { name, value } = event.target;
    setService({ ...service, [name]: value });
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
  const handleClose=()=>{
    props.setIsOpen(false)
    setOpen(false)

  }
  const save=()=>{

    ServiceStore.saveService(service);
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
                type='number'
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                // value={details2.name1}
                onChange={handleChangeService}
              />
              <TextField
                id="name"
                label="name"
                name="name"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                // value={details2.address}
                onChange={handleChangeService}
              />
              <TextField
                id="description"
                label="description"
                name="description"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                // value={details2.phone}
                onChange={handleChangeService}
              />
              <TextField
                id="price"
                label="price"
                name="price"
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                // value={details2.phone}
                onChange={handleChangeService}
              />
              <TextField
                id="duration"
                label="duration"
                name="duration"
                type='number'
                // placeholder="name"
                // multiline
                // defaultValue={details2.name}
                // value={details2.phone}
                onChange={handleChangeService}
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
export default AddServies