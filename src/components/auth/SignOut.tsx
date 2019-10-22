import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from '../../aws-exports'

Amplify.configure(awsconfig)

interface IConfirmProps {
  username: string
}

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

const Confirm = ({ username }: IConfirmProps) => {
  const [code, setCode] = useState<string>('')
  const classes = useStyles()

  // const confirmUser = () => {
  //   Auth.confirmSignUp(username, code)
  //     .then(data => console.log(data))
  //     .catch(err => console.error(err))

  // TODO!!! Add function to sign out
  // TODO clear cookies!
  // todo sign out amplify auth
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Confirm
        </Button>
      </div>
    </Container>
  )
}

export default Confirm