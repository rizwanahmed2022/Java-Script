let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value of VP1")
        }, 1000);
})
let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("value of P2")
        }, 2000);
})
let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve("Value of P3")
        }, 3000);
})


p1.then((value) => {
        console.log(value)
})
p2.then((value) => {
        console.log(value)
})
p3.then((value) => {
        console.log(value)
})


let all = Promise.all([p1, p2, p3])

all.then((value) => [
        console.log(value)
])






// let all = Promise.race([p1, p2, p3])

// all.then((value) => [
//         console.log(value)
// ])



// let all = Promise.allSettled([p1, p2, p3])

// all.then((value) => [
//         console.log(value)
// ])





// let all = Promise.resolve([p1, p2, p3])

// all.then((value) => [
//         console.log(value)
// ])