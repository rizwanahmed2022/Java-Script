let x = 22
try {
        console.log(x)
} catch (error) {
        let x = 22898
        console.log(x)

}

try {
        let x = prompt("Enter Your Age")
        x = Number.parseInt(x)
        if (x > 40) {
                throw Error("Your Not Able To Apply")
                // throw SyntaxError("this is new error")
        }
        console.log("Welcom To Our Institute")


} catch (error) {

        console.log(error.name)
        console.log(error.message)

}