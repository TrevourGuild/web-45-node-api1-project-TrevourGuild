// BUILD YOUR SERVER HERE
const express = require('express')
const Users = require('./users/model.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) =>{
    res.status(200).json({message: 'hey there trevour' })
})

server.post('/api/users', (req, res) =>{
    const newUser = req.body
    Users.insert(newUser)
    .then(user =>{
        if (user){
            res.status(201).json(user)
        }else{
            res.status(400).json({message: "Please provide name and bio for the user"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
    })
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
    Users.findById(req.params.id)
    .then(user =>{
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({message: "The user with the specified ID does not exist"})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
      })
})

server.delete('/api/users/:id', (req, res) =>{
    Users.remove(req.params.id)
    .then(user =>{
        if(user) {
            res.status(200).json(user)
        } else{
            res.status(404).json({
                message: `dog ${req.params.id} not real!!!`
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: err.message })
      })
})

server.put('/api/users/:id', (req, res) =>{
    res.json('updates user')
})







module.exports = server; // EXPORT YOUR SERVER instead of {}
