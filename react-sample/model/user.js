const mongoose = require('mongoose');

// 스키마 생성
const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,
        unique : 1
    },
    password : {
        type : String, 
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {               // 유효성 관리
        type : String
    },
    tokenExp : {            // token 유효기간
        type : Number
    }
})

const user = mongoose.model('user', userSchema);

module.exports = {user}             // 다른 곳에서도 사용할 수 있도록