import fs from "fs";

// setTimeout(()=> {;
//     console.log("SetTimeOut")
// },1000);

// fs.readFile("intro.txt", "utf8",(err,data)=>{
//     console.log("file read completely");
// });

// setInterval(()=> {
//     console.log("Set Interval after 5 ms");

// },500)

// setImmediate(()=>{
//     console.log("Set Immediate");
// })


fs.readFile("intro.txt", "utf8",(err,data)=>{
    console.log("file read completely");
    setTimeout(()=>{
        console.log("setting time ")
    })
    setImmediate(()=>{
        console.log("set immediate")
    })
});
