const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    method: ["GET", "POST"]
  }
});

app.use(cors());

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`Server is running! <br> PORT: ${PORT}`);

});

io.on('connection', (socket) => {
  socket.emit('me', socket.id);

  socket.on('disconnect', () => {
    socket.broadcast.emit('callEnded');
  })

  socket.on('callUser', ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit('callUser', { signal: signalData, from, name });
  })

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const lc = new RTCPeerConnection()
// const dc = lc.createDataChannel("channel")
// dc.onmessage = (e) => console.log("A message: ", e.data)
// dc.onopen = e => console.log("Connection opened!")
// lc.onicecandidate = e => console.log("New Ice Candidate found! reprinting SDP" + JSON.stringify(lc.localDescription))
// lc.createOffer().then(o => lc.setLocalDescription(o)).then(a => console.log("Set successfully!"))

// // from peer 2
// lc.setRemoteDescription(answer)
// dc.send("Hey peer 2!")

// const offer = sdp
// const rc = new RTCPeerConnection()
// rc.onicecandidate = e => console.log("New Ice Candy! SDP: " + JSON.stringify(rc.localDescription))
// rc.ondatachannel = e => {
//   rc.dc = e.channel;
//   rc.dc.onmessage = e => console.log("New message: " + e.data)
//   rc.dc.onopen = e => console.log("Connection opened!")
// }
// rc.setRemoteDescription(offer).then(a => console.log("offer set!"))
// rc.createAnswer().then(a=>rc.setLocalDescription(a)).then(a=>console.log("Answer created!"))