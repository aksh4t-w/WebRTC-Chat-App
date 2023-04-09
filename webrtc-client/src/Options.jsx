import React from 'react'
import {Button, TextField, Grid, Typography, Container, Paper} from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { SocketContext } from './SocketContext'

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = React.useContext(SocketContext)
  const [idToCall, setIdToCall] = React.useState('')
  
  return (
    <Container style={{margin: 10}}>
      <Paper>
        <form action="" noValidate style={{margin: 10, padding: 10}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} style={{marginTop: '10px'}}>
                <Button variant="contained" color="primary" fullWidth>Copy Your ID</Button>
              </CopyToClipboard>
              {/* <Typography variant="p" gutterBottom>{me}</Typography> */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Make a Call</Typography>
              <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" fullWidth onClick={leaveCall} style={{marginTop: '10px'}}>Hang Up</Button>
                ) : (
                  <Button variant="contained" color="primary" fullWidth onClick={() => callUser(idToCall)} style={{marginTop: '10px'}}>Call</Button>
                )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options