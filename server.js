const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts =[
    {name:"tantai",phoneNumber:"096121231"},
    {name:"kanapoj",phoneNumber:"0636251929"}
]
app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts
app.get('/contacts',(req,res) => {
    res.json(contacts)
})


/// TODO: Develop POST /contacts
app.post('/contacts',(req,res)=>{
    let newContact = req.body
    contacts.push(newContact)
    res.status(201).json(newContact)
})


app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
