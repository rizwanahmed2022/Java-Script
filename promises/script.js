function func(src) {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.src = src
                document.body.appendChild(script)
                script.onerror = () => {
                        reject("Rejected")
                }
                script.onload = () => {
                        resolve("resolve")
                }
        });
}

let p = func("https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4").then((value) => {
        console.log("this is value of resolve which is  " + value)
}).catch((error) => {
        console.log("this is value of error which is  " + error)
        return func("https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4").then((value) => {
                console.log("this is value of resolve which is  " + value)
        }).catch((error) => {
                console.log("this is value of error which is  " + error)
                return func("https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4")


        })


})






// // let p = new Promise((resolve, reject) => {

// //         var func =(src)=> {
// //                 let scrt = document.createElement("script");
// //                 scrt.src = src;
// //                 scrt.onload = function () {
// //                         resolve(src)
// //                 };
// //                 scrt.onerror = function () {
// //                         reject(src)
// //                 };
// //                 document.body.appendChild(scrt);
// //         }


// //         func(
// //                 "https://cdn.jsdelivr.net/npm/btstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// //         );


// // });



// // p.then((value) => {
// //         console.log("succes on " + value)

// // }, ((error) => {
// //         console.log("error on " + error)
// //         let p = new Promise((resolve, reject) => {

// //                 var func =(src)=> {
// //                         let scrt = document.createElement("script");
// //                         scrt.src = src;
// //                         scrt.onload = function () {
// //                                 resolve(src)
// //                         };
// //                         scrt.onerror = function () {
// //                                 reject(src)
// //                         };
// //                         document.body.appendChild(scrt);
// //                 }


// //                 func(
// //                         "https://cdn.jsdelivr.net/npm/bootstrp@5.3.3/dist/js/bootstrap.bundle.min.js"
// //                 );


// //         });
// //         p.then((value)=>{
// //                 console.log("script is workin in 2nd promis on " + value)
// //         },((error)=>{
// //                 console.log("script isn't workin in 2nd promis "+ error)
// //                 let p = new Promise((resolve, reject) => {

// //                         var func =(src)=> {
// //                                 let scrt = document.createElement("script");
// //                                 scrt.src = src;
// //                                 scrt.onload = function () {
// //                                         resolve(src)
// //                                 };
// //                                 scrt.onerror = function () {
// //                                         reject(src)
// //                                 };
// //                                 document.body.appendChild(scrt);
// //                         }


// //                         func(
// //                                 "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
// //                         );


// //                 });
// //                 p.then((value)=>{
// //                         console.log("script is workin in 3rd promis  " + value)
// //                 },((error)=>{
// //                         console.log("script isn't workin in 3rd promis on "+ error)

// //                 }))

// //         }))

// // }))

// let p = new Promise((resolve, reject) => {
//         setInterval(() => {
//                 resolve("First")
//         }, 2000)
// }).then((value) => {
//         console.log(value)
//         setTimeout(() => {
//         }, 4000)
//         return 23;
// }).then((value) => {
//         setTimeout(() => {
//                 console.log(value)
//         }, 6000)
//         return 'This is ';
// }).then((value) => {
//         setTimeout(() => {
//                 console.log(value)
//         }, 8000)
//         return 'last';
// }).then((value) => {
//         setTimeout(() => {
//                 console.log(value)
//         }, 10000)
// })