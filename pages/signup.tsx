import React, {FormEvent, useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { validateEmail } from "../src/utils/validation"

const useStyles = makeStyles(({ palette, spacing } : Theme) => createStyles({
  '@global': {
    body: {
      backgroundColor: palette.common.white,
    },
  },
  paper: {
    marginTop: spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: spacing(1),
    backgroundColor: palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: spacing(1),
  },
  submit: {
    margin: spacing(3, 0, 2),
  },
}))

const SignUpPage = () => {
  const [email, setEmail]                         = useState<string>('')
  const [password, setPassword]                   = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [errors, setErrors]                       = useState<string[]>([])
  const classes                                   = useStyles()

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    const isEmailValid = validateEmail(email)
    if (isEmailValid) {
      setErrors(['Invalid email format', ...errors])

      // TODO!!! Red the text field if error happen over there
      // TODO!!! Add Message box to display error messages
    }

    console.log(email)
    console.log(password)
    console.log(confirmedPassword)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => setEmail(event.target.value)}
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
            onChange={event => setPassword(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmedPassword"
            label="Confirmed Password"
            type="password"
            id="confirmedPassword"
            autoComplete="current-password"
            onChange={event => setConfirmedPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/signin" variant="body2">
                <a>"Already have an account? Sign in"</a>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default SignUpPage