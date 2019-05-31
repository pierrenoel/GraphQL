const express = require('express')
const server = express()

server.listen(4000,() => {
    console.log("Le serveur est en écoute")
})