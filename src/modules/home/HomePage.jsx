import React from 'react';
import Navbar from '../../components/Navbar';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="App bg-[#fafeff]">
       <Navbar/>
       <Container sx={{ paddingTop: "50px" }}>
        <Outlet />
      </Container>
    </div>
  )
}

export default HomePage
