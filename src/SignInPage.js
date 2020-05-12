import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import { useHistory } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://chotuve.com/'>
        Chotuve
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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

  const history = useHistory()

  const handleChangeUserPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangeUserEmail = (e) => {
    setEmail(e.target.value)
  }

  const PwEmailAlert = <Alert 
                            variant="outlined"
                            severity="error">   
                          Email or password is incorrect
                        </Alert>

  // TODO: agregar handler para el boton sign in.
  // Cuando me logueo recibo un token y algun mensaje diciendo
  // si todo ocurrio bien, y en base a esto se setean errores en
  // el formulario (para indicar los mismos).

  return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          
          <form className={classes.form} noValidate>

          {showPwEmailAlert ? PwEmailAlert: null}
          
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
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href='/sign-up' variant='body2'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
  )
}
