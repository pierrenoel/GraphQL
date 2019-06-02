const express = require('express')
const GraphQLHTTP = require('express-graphql')
const schema = require('./schema')
const server = express()

server.use("/graphql",GraphQLHTTP({
    schema,
    graphiql:true
}))

server.listen(4000,() => {console.log("Le serveur est à l'écoute")})