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

Lancer le serveur
```Terminal
node server.js
```

## 3. db.json
```terminal
touch db.json
```
*Exemple*

```json
{
    "users":[
        {
            "id":"2",
            "name":"Pierre"
        },
        {
            "id":"2",
            "name":"Marc"
        }
    ]
}
```

Lire le json
``` terminal
json-server --watch db.json
```

## 4. Modification server.js
```js
const userSchema = require('./schema/schema')
---
graphiql:true,
schema : userSchema
---
}))
```

## 5. Ajout du schema
``` javascript
const graphql = require('graphql')
const axios = require('axios')

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql

// Définir users

const UserType = new GraphQLObjectType({
    'name' : 'User',
    fields : {
        id : {type:GraphQLString},
        name : {type:GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields: {
        user: {
            type:UserType,
            args: {id:{type:GraphQLString}},
            resolve(parentValue,args){
                return axios.get(`http://localhost:3000/users/${args.id}`).then( (response) => {
                    return response.data
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})
```

