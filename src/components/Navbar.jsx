import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Navbar() {
  return (
    <AppBar position="static" sx={{ }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SupervisedUserCircleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            UMS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <SupervisedUserCircleIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            UMS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={() => {}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <ArrowDropDownIcon/>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
