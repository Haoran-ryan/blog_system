# blog_system

# Backend end 
## initialisation 
1. initialisation - install Express 
```shell
    npm init - y 
```
2. install eLite
```shell
    npm install express --save 
```
3. create node file 
```shell
touch app.js
```
### app.js 

1. start the server
    1. callback in listen - to indicate if the server is running 
```javascript
const express = require('express');

const app = express(); 
const port = 8080;  

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
```

```shell
node app.js
```

2.  port variable - IRL created in the enviornoment configuration file 
```shell
npm i dotenv
```

3. Eg. how to set up a .env file using dotenv tool?
    1. create a .env
```javascript 
# server 
HOST = localhost 
PORT = 8000
```
    
    2. import dotenv tool in `app.js`

```javascript
require('dotenv')

const express = require('express');

const app = express(); 
const PORT = process.env.PORT || 8080 
const HOST = process.env.HOST || `localhost`
app.listen(PORT,()=>{
    console.log(`Server is running on http://${HOST}:${PORT}`);
})

```