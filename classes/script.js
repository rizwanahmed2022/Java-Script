class Student {
        submit() {
                console.log(this.name + " Your Form is subbmitted For Prgram " + this.program)
        }
        cancel() {
                let x = new Date()
                console.log(this.name + " Your Form is Cancelled For Prgram " + this.program +" on "+x.getUTCFullYear())
        }
        fill(name, program) {
                this.name = name
                this.name = name.toUpperCase()
                this.program = program
                this.program = program.toUpperCase()
        }

}


let rizwan = new Student()
rizwan.fill("Rizwan Baloch", "Information Technology")
rizwan.submit()


let rehan = new Student()
rehan.fill("Rehan Manzoor", "Computer Science ")
rehan.submit()
rehan.cancel()


