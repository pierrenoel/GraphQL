### Json server

## 1. Create a directory and execute this command
``` TERMINAL
npm init
```

## 2 . Install json-server on your machine
``` TERMINAL
npm install -g json-server
npm install express
```
## 3. Create a db.json

```json
{
  "users" : 
  [
   {
    "id" : "1",
    "name" : "Pierre"
   },
   {
    "id" : "2",
    "name" : "Stéphanie"
   }
  ]
}
```
## 4. Create a server.js

```JS
const express = require('express')
const server = express()

server.listen(4000,() => {
  console.log("Le serveur est sur écoute")
})
```

## 5. Start Json server
```TERMINAL
json-server --watch db.json
```

## 6. Start express
```TERMINAL
node server.js
```
