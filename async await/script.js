async function func() {
        var value = 0
        console.log("befor setTimout")
        let a = new Promise((resolve, reject) => {

                setTimeout(() => {
                        resolve(10)
                }, 2000);
        })
        value = prompt("Enter Value")
        value = parseInt(value)
        //stops the function and wating for the value of a which is comes in 2s from promise
        let b = await a
        console.log("Value Of b is  " + b + " And Value of user input  " + value)
        b = await a + value
        console.log("promise value  " + b + " + " + value + " = " + + b)


        setTimeout(() => {
                a.then((value) => {

                        console.log("After setTimout  " + b)
                        alert("Alart")
                })
        }, 2000);
}

func(13)