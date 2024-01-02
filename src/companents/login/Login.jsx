import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useState } from 'react';
import { observer } from "mobx-react";
import MyStore from '../../store/MyStore';
/////
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

const Login = (observer(() => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  //
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  //

  const handleLogin = async () => {
    console.log('login');
    const response = await fetch("http://localhost:8787/login", {
      method: "POST",
      body: JSON.stringify({
        name, password
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.statusText)
    console.log(MyStore.isLogin)

    if (response.status === 200) {
      MyStore.setIsLogin(true);
    }
    else if (response.status === 401) {
    //   setOpen(true);
    //   return (
    //     <>
    //     {/* <React.Fragment> */}
    //       {/* <Button variant="outlined" onClick={handleClickOpen}>
    //         Open alert dialog
    //       </Button> */}
    //       {/* <Dialog
    //         open={open}
    //         onClose={handleClose}
    //         aria-labelledby="alert-dialog-title"
    //         aria-describedby="alert-dialog-description"
    //       >
    //         <DialogTitle id="alert-dialog-title">
    //           {"Use Google's location service?"}
    //         </DialogTitle>
    //         <DialogContent>
    //           <DialogContentText id="alert-dialog-description">
    //             Let Google help apps determine location. This means sending anonymous
    //             location data to Google, even when no apps are running.
    //           </DialogContentText>
    //         </DialogContent>
    //         <DialogActions>
    //           <Button onClick={handleClose}>Disagree</Button>
    //           <Button onClick={handleClose} autoFocus>
    //             Agree
    //           </Button>
    //         </DialogActions>
    //       </Dialog>
    //     </React.Fragment> */}
    //     <div>error!!!!!!</div>
    // </>
    //   );
      alert("error!!!!!!!!!! the user & paswerd not valid")
      setName('')
      setPassword('')
    }

    console.log(MyStore.isLogin)
  }


  return (
  <>
    <form>
      <Stack spacing={2}>
        <Input placeholder="user" required type='string' value={name} onChange={(e) => setName(e.target.value)} />
        <Input placeholder="password" required type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin}>login</Button>
      </Stack>
    </form>
  </>
);
}))

export default Login
