function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}

const { resolve } = require("path");

// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
// write your code here
// 以下是使用範例
doJob('刷牙', 1000, function (data) {
    // 表示 doJob 做完了
    console.log(data);
    doJob('吃早餐', 3000, function (data){
        console.log(data);
        doJob('寫功課', 2000, function (data){
            console.log(data);
            doJob('吃午餐', 2000, function (data){
                console.log(data);
            });
        });
    });
});

// TODO: Promise version
// function doJobPromise(job, time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let now = new Date();
//             resolve(`完成工作 ${job} at ${now.toISOString()}`);
//         }, time);
//     });
// }

// let now = new Date();
// console.log(`開始工作 at ${now.toISOString()}`);

// doJobPromise('刷牙', 1000)
//     .then((data) => {
//         console.log(data);
//         return doJobPromise('吃早餐', 3000);
//     })
//     .then((data) => {
//         console.log(data);
//         return doJobPromise('寫功課', 2000);
//     })
//     .then((data) => {
//         console.log(data);
//         return doJobPromise('吃午餐', 2000);
//     })
//     .then((data) => {
//         console.log(data);
//     });

