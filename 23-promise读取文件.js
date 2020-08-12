//读取文件算是异步任务

// 引入fs模块
const fs = require('fs');
/*
//调用方法读取文件
fs.readFile('./你好.md',(err, data) =>{
    // 如果失败 则抛出错误
    if(err) throw err ;
    //如果没出错 则输出内容
    console.log(data.toString())
});
*/
//使用promise封装
const p = new Promise(function(resolve,reject){
    fs.readFile('./你好.md',(err,data)=>{
        //失败
        if(err) reject(err);
        //成功
        resolve(data);
    })
});
p.then(function(value){
    console.log(value.toString())
},function(reason){
    console.log("读取失败")
});
