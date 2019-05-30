### Json server
## 1 . Install json-server on your machine
``` TERMINAL
npm install -g json-server
```
## 2. Create a db.json

```json
{
  "user" : 
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

## 3. Start Json server
```TERMINAL
json-server --watch db.json
```
