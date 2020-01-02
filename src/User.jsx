import React from 'react';
import './User.css';
import { AppBar, Avatar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

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
      <AppBar style={{background: '#282828'}}>
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
      <p>{localStorage.getItem('username')}</p>
      </ThemeProvider>
    </div>
  )
}
