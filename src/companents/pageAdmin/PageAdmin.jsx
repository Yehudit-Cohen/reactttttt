// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import { Outlet, Link } from "react-router-dom"

// export default function PageAdmin() {
//   const [value, setValue] = React.useState('one');

//   const handleChange = (event, newValue) => {
//     // return(
//     //     <>
//     //     <Link to="./"newValue>{newValue}</Link>
//     //     </>)
//     setValue(newValue)

//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Tabs
//         value={value}
//         onChange={handleChange}
//         textColor="secondary"
//         indicatorColor="secondary"
//         aria-label="secondary tabs example"
//       >
//         <Tab value="one" label="Item One" />
//         <Tab value="two" label="Item Two" />
//         <Tab value="three" label="Item Three" />
//       </Tabs>
//     </Box>
//   );
// }

import { Link, Outlet } from "react-router-dom"
import Details from "../details/Details"

function PageAdmin() {
    return (
        <>
            <Details />
            <Link to="./services">services</Link>
            |
            <Link to="./meeting">meeting</Link>
            <br />
            outlet:
            <br />
            <Outlet />

        </>

    )
}

export default PageAdmin

