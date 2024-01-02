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
import Swal from 'sweetalert2'

// import DetailsStore from '../../store/DetailsStore';
// import ServiceStore from '../../store/ServiceStore';
import MeetingStore from '../../store/MeetingStore';
//
import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { observer } from 'mobx-react';
import ServiceStore from '../../store/ServiceStore';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const AddMeeting = (observer((props) => {
  // function AddMeeting(props){
  // debugger
  const [value1, setValue1] = React.useState(dayjs('2022-04-17T15:30'));

  const [meeting, setmeeting] = useState({
    id: '',
    serviceType: '',
    dateTime: null,//מבנה של תאריך ושעה סטנדרטי בjs
    clientName: '',
    clientPhone: '',
    clientEmail: '',

  })
  
  // MeetingStore.addCountId()
  const handleDateTimeChange = (dateTime) => {
    const formattedDateTime = dateTime.format('YYYY-MM-DDTHH:mm:ss');
    setmeeting((meeting) => ({
      ...meeting,
      dateTime: formattedDateTime,
    }));
    const e = { target: { name: 'dateTime', value: formattedDateTime } };
    setmeeting((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    // handleAddMeeting(dateTime)
  };
  const handleAddMeeting = (event) => {
    const { name, value } = event.target;
    setmeeting({ ...meeting, [name]: value });
    console.log(name)
    console.log(value)
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    props.setIsOpen(false)
    setOpen(false)
  }
  const checktype=()=>{
    
  }
  const save = () => {
    console.log("ServiceStore.serviceArr ", ServiceStore.serviceArr[0])
    console.log("ServiceStore.serviceArr.find(x=>x.id==meeting.serviceType) ",ServiceStore.serviceArr.find(x=>x.id==meeting.serviceType))
    if(!ServiceStore.serviceArr.find(x=>x.id==meeting.serviceType)){
      Swal.fire({
        title: "Error! id not correct!"
      })
    }
    else if (meeting.clientName !== '' && meeting.clientEmail !== '' && meeting.clientPhone !== '') {
      Swal.fire({
        title: "do you want to save this meeting???",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "yes",
        denyButtonText: "no"
      }).then((result) => {
        if (result.isConfirmed) {
          event.preventDefault();
          const status = MeetingStore.saveMeeting(meeting)
          console.log("status1", status)
        }
      })
    }
    else {
      Swal.fire({
        title: "Error! you need to put details of meeting!",
        // text: "required filds",
        // imageUrl: X,
        // imageWidth: 400,
        // imageHeight: 200,
        // imageAlt: "image"
      })
    }
    handleClose();
  }
  useEffect(() => {
    handleClickOpen();
    console.log("inside use effect")
  }, []);
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          add meeting
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
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Stack spacing={2}>
            <TextField
                id="id"
                label="id"
                name="id"

                onChange={handleAddMeeting}
              />
              <TextField
                id="serviceType"
                label="serviceType"
                name="serviceType"
                onChange={handleAddMeeting}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      variant="outlined"
                      className="inputs"
                      name="dateTime"
                      sx={{ mb: 3, mx: 4 }}
                      label="Meeting Date and Time"
                    />
                  )}
                  value={meeting.dateTime}
                  onChange={handleDateTimeChange}
                  disablePast
                  required
                />
              </LocalizationProvider>
              <TextField
                id="clientName"
                label="clientName"
                name="clientName"
                onChange={handleAddMeeting}
              />
              <TextField
                id="clientPhone"
                label="clientPhone"
                name="clientPhone"
                onChange={handleAddMeeting}
              />
              <TextField
                id="clientEmail"
                label="clientEmail"
                name="clientEmail"
                onChange={handleAddMeeting}
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
}
))
export default AddMeeting