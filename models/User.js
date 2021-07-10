const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim:true, //입력 값 중 공란 제거
        unique:1 //입력 중복 값 방지 필수 값  
    },
    lastname:{
        type: String,
        maxlength:50
    },
    role:{
        type: Number,
        default: 0 //넘버값 지정 없을 경우 일반 회원 : 0 관리자 :지정번호로
    },

    image: String,

    token:{  //유효성 관리 목적
        type: String
    },
    tokenExp:{   //유효성 관리 목적 기간 관리용
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports = {User}