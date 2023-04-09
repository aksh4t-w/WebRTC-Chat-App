import React from 'react'
import {Grid, Typography, Paper} from '@mui/material'
// import {makeStyles} from '@mui/styles'

import { SocketContext } from './SocketContext'

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: '550px',
//     [theme.breakpoints.down('xs')]: {
//       width: '300px',
//     },
//   },
//   gridContainer: {
//     justifyContent: 'center',
//     [theme.breakpoints.down('xs')]: {
//       flexDirection: 'column',
//     },
//   },
//   paper: {
//     padding: '10px',
//     border: '2px solid black',
//     margin: '10px'
//   }
// }))


const VideoPlayer = () => {
  // const classes = useStyles()
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = React.useContext(SocketContext)
  const gridContainer = {
        justifyContent: 'center',
  }

  const paper = {
        padding: '10px',
        border: '2px solid black',
        margin: '10px'
  }

  const video = {
        width: '550px',
      //   [theme.breakpoints.down('xs')]: {
      //     width: '300px',
      //  }
  }

  return (
    <Grid container spacing={2} style={gridContainer}>
      {stream && (
        <Paper item elevation={3} style={paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
            <video playsInline muted ref={myVideo} autoPlay className={video} height={200}/>
          </Grid>
        </Paper>
        )}
      {callAccepted && !callEnded && (
        <Paper item elevation={3} style={paper}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>{call.name || "User Video"}</Typography>
            <video playsInline muted ref={userVideo} autoPlay className={video} height={400} />
          </Grid>  
        </Paper>
        )}
    </Grid>
  )
}

export default VideoPlayer
