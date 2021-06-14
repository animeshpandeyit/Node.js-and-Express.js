// // // // // // // // const amount = 12

// // // // // // // // if(amount < 100){
// // // // // // // //     console.log("small number");
// // // // // // // // }
// // // // // // // // else
// // // // // // // // {

// // // // // // // //     console.log("bigger number");
// // // // // // // // }
// // // // // // // // console.log("hey its my first node js app")

// // // // // // // console.log(__dirname);
// // // // // // // setInterval(()=>{

// // // // // // // console.log("hello world");

// // // // // // // },3000);

// // // // // // const j = 'jhon';
// // // // // // const p = 'peter';

// // // // // // const sayHI=((name)=>{

// // // // // // console.log(`hey there ${name}`)
// // // // // // })

// // // // // // sayHI('animesh');

// // // // // const os = require('os');

// // // // // //info about current users
// // // // // // const users = os.userInfo()
// // // // // // console.log(users)

// // // // // // console.log(`the system uptime is ${os.uptime()}`)

// // // // // const currentOS = {

// // // // //     name: os.type(),
// // // // //     release: os.release(),
// // // // //     totalMem: os.totalMem(),
// // // // //     freeMem: os.freeMem()

// // // // // }
// // // // // console.log(currentOS);

// // // // const { readFileSync, writeFileSync } = require('fs')

// // // // const first = readFileSync('./content/first.txt','utf8');
// // // // const second = readFileSync('./content/second.txt','utf8');

// // // // console.log(first,second);

// // // // writeFileSync(
// // // //     './content/result-sync.txt',
// // // //     `here is the result: ${first}, ${second}`, {flag: 'a'}
// // // //     );

// // // const { readFiles, writeFiles } = require('fs')

// // // console.log('starting');

// // // readFiles('./content/first.text','utf8', (err, result)=>{

// // //     if(err)
// // // {

// // //     console.log(err);
// // //     return;
// // // }
// // // const first = result
// // // readFiles('./content/result-sync.txt', `here is the result: ${first}, ${second}`)

// // // })

// // const http = require("http");

// // const server = http.createServer((req, res) => {
// //     //console.log(req);
// //     if(req.url === '/'){
// //         res.end('hie you are on home page');
// //     }
// //     if(req.url === '/about'){
// //         res.end('hie you are on about page');
// //     }
// //     res.end(`<h1> OOPs!! </h1>
// //     <a href= "/"> back to home page </a>`)
// // //   res.write("hello welcome to our home page");
// // //   res.end();

// // });

// // server.listen(5000);

// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]];

// const newItems = _.flattenDeep(items); // flattenDeep is a method of lodash
// console.log(newItems);

// console.log("hello people!");

const { readFile} = require('fs');

console.log('started a first task');

readFile('./content/first.txt','utf8', (err, result)=>{

if(err)
{
    return;
}
console.log(result)
console.log(' completed first task');
});
 console.log(('starting the next task'));