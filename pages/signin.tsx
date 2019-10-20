import React, {FormEvent, useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
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

const LoginPage = () => {
  const [email, setEmail]                     = useState<string>('')
  const [password, setPassword]               = useState<string>('')
  const [isRemember, setIsRemember]           = useState<boolean>(false)
  const [errors, setErrors]                   = useState<string[]>([])
  const classes                               = useStyles()

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
    console.log(isRemember)
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            checked={isRemember}
            onChange={() => setIsRemember(!isRemember)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
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
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default LoginPage