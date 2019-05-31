### 002_JsonRequests
## 1. Installation des dépendances
```terminal
npm init
```
```terminal
npm install express express-graphql graphql axios
```

## 2. Création du serveur 
```terminal
touch server.js
cd server.js
```

```javascript
const express = require('express')
const expressGraphQl = require('express-graphql')

const server = express()

server.use('/salutGraphQL', expressGraphQl({
    graphiql:true,
}))

server.listen(4000,() => {
    console.log("Serveur est en écoute sur le port 4000")
})
```