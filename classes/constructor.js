class Student {

        constructor(name, program) {
                this.name = name
                this.name = name.toUpperCase()
                this.program = program
                this.program = program.toUpperCase()
                console.log(this.name + " Your Form is in panding please submit it first")


        }

        submit() {

                console.log(this.name + " Your Form is subbmitted For Prgram " + this.program)
                const now = new Date();
                this.hours = now.getHours().toString().padStart(2, '0');
                this.minutes = now.getMinutes().toString().padStart(2, '0');
                this.seconds = now.getSeconds().toString().padStart(2, '0');
                this.date = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`


        }

        cancel() {
                let x = new Date()
                console.log(this.name + " Your Form was Cancelled " + " on  " + x.getDate() + "/" + x.getMonth() + "/" + x.getFullYear() + " For Program " + this.program)
                this.name = undefined
                this.program = undefined
        }

        info() {
                if (this.name == undefined) {
                        console.log("Student not exits!")
                } else {
                        console.log("\nStudent Informations:")
                        console.log("Name: " + this.name + "\nProgram: " + this.program + "\nDate: " + this.hours + ":" + this.minutes + ":" + this.seconds + " on " + this.date)
                }
        }
}


//Child class of Student declired here 
class CS_Student extends Student {
        add(rnumber, nice) {
                this.rnumber = rnumber;
                this.nice = nice;
        }
        info() {
                if (this.name == undefined) {
                        console.log("Student not exits!")
                } else {
                        super.info()
                        console.log("\nRoll Number: " + this.rnumber + "\nNICE: " + this.nice)
                }
        }


}



let rizwan = new CS_Student("Rizwan Ahmed ", "Inofrmation Tehcnology")
rizwan.add(30, 5429332333552)


