import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { SocketContext } from './SocketContext'

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {(call?.isReceivedCall && !callAccepted && <h2>Notifications</h2>) ? 
      (
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <h2 style={{color: 'red'}}>{call.name} is calling : </h2>
          <Button style={{height: '50%'}} variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )
      : null}
    </>
  );
};

export default Notifications;