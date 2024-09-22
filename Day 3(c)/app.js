let fs = require('fs');
// console.log(r);
//We will perform (Create, Read, Write, Delete)

//1. Create
// let data = 'Vibhu Dixit';
// fs.writeFile('abc.txt',data,{
//     encoding: 'utf8',
//     flag: 'w' //w for write, a for append
// },(err)=>{
//     if(err) throw err;
//     console.log('File created successfully');
// })

//2. Read
// fs.readFile('abc.txt',{
//     encoding: 'utf8',
//     flag: 'r' //r for read
// },(err,data)=>{
//     if(err) throw err;
//     console.log('File content:',data);
// })

// 3. Update
// fs.appendFile('abc.txt',"vibhu is doing BTech",
//     (err)=>{
//         if(err) throw err;
//         console.log('File updated successfully');
// })

//4. Delete
// fs.unlink('abc.txt',(err)=>{
//     if(err) throw err;
//     console.log('File deleted successfully');
// })