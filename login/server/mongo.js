const mongoose = require('mongoose');
mongoose.Promise = global.Promise
DB_URL = 'mongodb://127.0.0.1:27017/vnode'
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',function () { 
    console.log("数据库连接成功")
 })
mongoose.connection.on('error',function (err) { 
    console.log("数据库连接错误",err)
 })
mongoose.connection.on('disconnected',function () { 
    console.log('数据库连接断开')
 })
 module.exports = mongoose
