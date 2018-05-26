const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
let contacts =[
    {name:"tantai",phoneNumber:"096121231"},
    {name:"kanapoj",phoneNumber:"0636251929"}
]
///คณพศ 59160846
app.use(bodyParser.json())
app.use(cors())

/// TODO: Develop GET /contacts



/// TODO: Develop POST /contacts



app.listen(3000, () => {
    console.log('API Server started at port 3000')
})
