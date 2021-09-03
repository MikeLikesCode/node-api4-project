require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express();

server.use(express.json())
server.use(cors())

const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.json({ message: 'Web 45 is awesome!' })
  })

server.get('/api/users', (req,res) => {
    res.status(200).json([{id:1, name:'Mike'}])
})

server.get('/api/users', (req,res) => {
    res.status(200).json([{id:1, name:'Mike'}])
})

server.post('/api/register', (req,res) => {
    const newUser = req.body;
    res.status(201).json(newUser)
})

server.post('/api/login', (req,res) => {
    res.status(200).json({ message: "User successfully logged in"})
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})