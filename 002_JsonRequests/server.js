const express = require('express')
const expressGraphQl = require('express-graphql')

const server = express()

server.use('/salutGraphQL', expressGraphQl({
    graphiql:true,
}))

server.listen(4000,() => {
    console.log("Serveur est en écoute sur le port 4000")
})