import { WebSocketServer } from "ws";

const wss = new WebSocketServer( { port: 8080 } );

let userCount = 0;

wss.on("connection", (socket) =>{
    userCount = userCount +1;
    console.log("user counted #" + userCount)
    socket.on("message", (message) =>{
        console.log(`${message.toString()} form user ${userCount}`)
        socket.send(message.toString())
    })
})