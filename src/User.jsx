import React from 'react';
import './User.css';
import { AppBar, Avatar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#98002e',
      dark: '#282828',
    },
    secondary: {
    main: '#F7931C'},
  },
});

export default function User() {
  return (
    <div className='user-page'>
      <ThemeProvider theme={theme}>
      <AppBar style={{background: '#282828'}} position="static">
        <Toolbar className='nav'>
          <Typography component="h1" variant="h5">
            SpeakWrite Logo
          </Typography>
          <div className='user'>
            <Avatar style={{background: 'red'}}>
            </Avatar>
            <Typography component="h1" variant="h5">
              {localStorage.getItem('username')}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Box component="section" className='welcome' p={1}>
        <Typography component='h1' variant='h3'>
          Welcome back!
        </Typography>
      </Box>
      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Box>
          <Typography component='h2'>
            Username: {localStorage.getItem('username')}
          </Typography>
          <Typography component='h2'>
            Email: fake@fake.com
          </Typography>
          <Typography component='h2'>
            Name: John Doe
          </Typography>
          <Typography component='h2'>
            Address: 123 Mountain rd Lakewood Colorado, 80226
          </Typography>
          <Typography component='h2'>
            Phone: 555-555-5555
          </Typography>
        </Box>
      </Grid>
      </ThemeProvider>
    </div>
  )
}
