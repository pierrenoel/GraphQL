### Json server

## 1. Create a directory and execute this command
``` TERMINAL
npm init
```

## 2 . Install json-server on your machine
``` TERMINAL
npm install -g json-server
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

## 4. Start Json server
```TERMINAL
json-server --watch db.json
```
