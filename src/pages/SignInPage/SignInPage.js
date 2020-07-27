import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import Copyright from 'components/Copyright'
import Menu from 'components/Menu'
import {app} from 'app/app'

import * as firebase from 'firebase';
import { timeout } from 'q'

const firebaseConfig = {
  apiKey: "AIzaSyDlBeowWP8UPWsvk9kXj9JDaN5_xsuNu4I",
  authDomain: "chotuve-videos.firebaseapp.com",
  databaseURL: "https://chotuve-videos.firebaseio.com",
  projectId: "chotuve-videos",
  storageBucket: "chotuve-videos.appspot.com",
  messagingSenderId: "662757364228",
  appId: "1:662757364228:web:02d934f2819b5d58581b51"
};

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignInPage (props) {
  
  const classes = useStyles()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [noEmailError, setNoEmailError] = useState(false)
  const [noPasswordError, setNoPasswordError] = useState(false)
  const [showPwEmailAlert, setShowPwEmailAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const history = useHistory()

  const handleChangeUserPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeUserEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleOnClick = async () => {
    try {
      const loginResult = await firebase.auth().signInWithEmailAndPassword(email, password)
      const token = await loginResult.user.getIdToken()
      app.loginUser(token);
      console.log("imprimo token id: ")
      console.log(app.thereIsLoggedInUser())
      setAlertMessage('')
      app.apiClient().getUserAdminInfo((response) => response.content())
                     .then((content) => {
        console.log("hola")
        console.log(content)
        console.log("holaa")
        if (content.admin) {
          history.push('/dashboard')
        } else {
          app.logoutUser();
          setAlertMessage("User is not admin.")
        }
      })
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password' || errorCode === 'auth/user-not-found') {
        setAlertMessage('Wrong email or password.');
      } else {
        setAlertMessage(errorMessage);
      }
    }
  }
  
  const ErrorMessageAlert = <Alert variant="outlined" severity="error"> {alertMessage} </Alert>

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={'logo.png'} />          
        <form className={classes.form} noValidate>

        {alertMessage !== '' ? ErrorMessageAlert : null}
          <TextField
            error={noEmailError}
            FormHelperTextProps={{ error: noEmailError }}
            helperText={noEmailError ? 'Must insert the email' : ''}
            variant='outlined'
            margin='normal'
            onChange={handleChangeUserEmail}
            required
            fullWidth
            id='email'
            value={email}
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            error={noPasswordError}
            FormHelperTextProps={{ error: noPasswordError }}
            helperText={noPasswordError ? 'Must insert the password' : ''}
            variant='outlined'
            margin='normal'
            onChange={handleChangeUserPassword}
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            value={password}
            autoComplete='current-password'
          />
          <Button
            type='button'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleOnClick}
          >
            Sign In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
