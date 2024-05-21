const express = require("express");
const fs = require('fs');
const app = express();


app.get('/api/users', async (req, res)=>{
    const usersFile = await fs.readFileSync('./src/users.json');
    const users  = await JSON.parse(usersFile)
    res.json(users);
})

app.get('*', (req, res)=>{
    res.status(404).send('page not found')
})

app.listen(5500, ()=>{
    console.log("server is listening on port 5500....");
});