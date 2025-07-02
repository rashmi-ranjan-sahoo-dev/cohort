import { WebSocketServer } from "ws";

const wss = new WebSocketServer( { port: 8080 } );

//event handler

wss.on("connection", function(socket){
    console.log("user connected");
    setInterval(()=>{
       socket.send("current prise of solana : "+ Math.floor(Math.random() * 10 + 1) )
    },3000)


    socket.on("message", (e) =>{
        console.log(e.toString());
    })
})