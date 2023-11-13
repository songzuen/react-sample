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

const { user } = require('./model/user');

const bodyParser = require('body-parser');
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));             // 클라이언트에서 가져오는 정보를 
//application/json
app.use(bodyParser.json())

app.post('/register', (req, res) => {
    // 회원가입시 필요한 정보 client에서 가져오면
    // 그것들을 db에 넣어준다
    
    //json 형식으로 받음
    const user2 = new user(req.body);
    const result = user2.save().then(()=>{
        res.status(200).json({
            success: true
            })
        }
    ).catch((err)=>{
        res.json({ success: false, err })
    })
    // 현재 미사용 function
    // user2.save((err, userInfo) => {                              // save() -> mongoDB 제공 메소드
    //     if(err) return res.json({ success : false, err})        // 데이터 전송 실패와 에러메세지 전송
    //     return res.status(200).json({                           // 성공코드(200)
    //         success : true
    //     })
    // });
})