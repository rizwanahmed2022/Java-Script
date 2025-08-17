var student = ['Rizwan Ahmed','Abdul Salam', 'Abdul Khaliq']
var students = document.querySelector('#students')
var input1 = document.querySelector('#input1')

student.forEach(element => {
    students.innerHTML +=`<li>${element}</li>`
});

function addstudent(){
    students.innerHTML = ""
    student.push(input1.value)

    student.forEach(element => {
    students.innerHTML +=`<li>${element}</li>`
    input1.value = ''
});
}
