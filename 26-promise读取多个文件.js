
//引入fs模块
const fs = require('fs');

/*
fs.readFile('./你好.md',(err,data)=>{
    fs.readFile('./我是.md',(err,data2)=> {
        fs.readFile('./憨批.md', (err, data3) => {
            let result = data +'\r\n'+ data2 +'\r\n'+ data3;
            console.log(result)
        })
    })
});
*/

//promise封装多个异步任务
const p = new Promise((resolve, reject) => {
    fs.readFile('./你好.md',(err,data)=>{
        resolve(data)
    })
});
p.then(value =>{
    return new Promise((resolve, reject) => {
        fs.readFile('./我是.md',(err,data)=>{
            resolve([value,data])
        })
    })
}).then(value=>{
    return new Promise((resolve, reject) => {
        fs.readFile('./憨批.md', (err, data) => {
            value.push(data);
            resolve(value)
        })
    })
}).then(value=>{
   // console.log(value)// 此时的value是个数组
    console.log(value.join('\r...............\n'))
});
