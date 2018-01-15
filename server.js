/**
 * Created by yanhaoqi on 2018/1/15.
 */
var mongoose = require('mongoose')
mongoose.connect('http://localhost:27017', function(){
    console.log('数据库连接成功')
})
var db = mongoose.connection
db.on('error', function(err){
    console.error('数据库链接失败:',err)
})
