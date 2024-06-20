import React, { useState } from 'react'
import {AppBar, Toolbar,Tabs,Tab, Typography} from '@mui/material'

function Navbar() {
  const[value,setValue]=useState()
  return (
    <React.Fragment>
        <AppBar sx={{background:"aliceblue",color:"green"}}>
          <Toolbar>
            <Typography>Ifuyegela</Typography>
            <Tabs sx={{marginLeft:"auto"}} value={value} indicatorColor='secondary'>
                <Tab label="services"/>
                <Tab label="projects"/>
                <Tab label="projects"/>
                <Tab label="projects"/>
                <Tab label="contacts us"/>
            </Tabs>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar