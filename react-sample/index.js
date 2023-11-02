const express = require('express')          // express module 호출
const app = express()                       // function 사용
const port = 3000                           // port set

//mongodb 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://songzuen:<password>@cluster0.0ykbmso.mongodb.net/?retryWrites=true&w=majority', {})
.then(() => console.log('MongoDb connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => res.send('hello World 안녕하세요'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))