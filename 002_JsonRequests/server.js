const express = require('express')
const expressGraphQl = require('express-graphql')
const userSchema = require('./schema/schema')
const server = express()

server.use('/GraphQL', expressGraphQl({
    graphiql:true,
    schema : userSchema
}))

server.listen(4000,() => {
    console.log("Serveur est en écoute sur le port 4000")
})