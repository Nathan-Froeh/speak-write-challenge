import React, { Component } from 'react';
import './Signin.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


class Signin extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  handleUsername = (e) => {
    this.setState({username: e.target.value})
  }

  handleSignin = (e) => {
    e.preventDefault()
    console.log(this.state.username)
    localStorage.setItem('username', this.state.username);
    window.location.href = "/user";
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: {
        main: '#98002e'},
        secondary: {
        main: '#F7931C'},
      },
    });
                
  const classes = makeStyles(theme => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  return (
    <div className="Sign-in">
      <ThemeProvider theme={theme}>
      <div className='logo-box'>
        <p className='logo'>SpeakWrite Logo</p>
      </div>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            color='primary'
            autoFocus
            value={this.username}
            onChange={this.handleUsername}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            color='primary'
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSignin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
        </ThemeProvider>
    </div>
  );
  }
}

export default Signin;