const express = require("express");
const app = express(); // express实例化
// 监听端口，设置回调
app.listen(3004,()=>{
    console.log("server start");
});


const {getToken} = require('./get_token_args');// 导入模块
const bodyParser = require("body-parser");// 插件
//app.use 使用中间件(插件)
app.use(bodyParser.urlencoded({extend:false}));
//设置一个post接口
app.post('/token/qie',(req,res)=>{
    // let {args} = req.body;
    // console.log(req.body);
    if(req.body){
        res.send({error_code:-1,msg:getToken(req.body)});
    }else{
        res.send({error_code:0,msg:"请传递参数"});
    }
    
});
