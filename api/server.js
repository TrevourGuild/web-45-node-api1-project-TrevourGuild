// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model')

const server = express()

server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).json({message: 'hey there trevour' })
})

server.post('/api/users' ,(req, res) =>{
    res.json('finds users')
})

server.get('/api/users', (req,res)=>{
    Users.find()
    .then(users =>{
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
      })
})

server.get('/api/users/:id', (req,res)=>{
    res.json('retuns object of users with id')
})

server.delete('/api/users/:id', (req, res) =>{
    res.json('deletes users')
})

server.put('/api/users/:id', (req, res) =>{
    res.json('updates user')
})







module.exports = server; // EXPORT YOUR SERVER instead of {}
