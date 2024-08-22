// students = ["wael", "eyad", "ahmed", "mohmed", 23, true]
// console.log(students)

// let l = students.length
// console.log(l)

// for (i=0; i<l; i++) {
//     console.log(students[i])
// }

// let laststudent = students[students.length - 1]
// console.log(laststudent)

// console.log(students.pop())
// // pop() its give me the last item in the list and deleit it

// students.push("habeba")
// console.log(students)

// students[6] = "ali"
// console.log(students)


// // this is call back Function map = for

// // =>{ this is called arrow function } 
// students.map(student =>{
//     console.log(student)
// })

// let student_num = ["ali", "ahmed", "shokry", 10]
// let s_num = student_num.map((s) => {
//     return s+1
// })
// console.log(s_num)


// // this is called object 
// let didales = {name: "eyad", age: 20, skills:"python, flask, backeend wep with node and express"}

// console.log(didales.age)
// console.log(didales.skills)

// console.log(didales['name'])


// let didales = {name: "eyad", age: 20, skills:"python, flask, backeend wep with node and express", marks: { since: 20, math: 30}}

// console.log(didales.marks.math)
// // or

// console.log(didales["marks"]["since"])

let students = [
    {firstname: "Ali", lastname: "shrif", age: 24, gender: "male"},
    {firstname: "donia", lastname: "samir", age: 20, gender: "female"},
    {firstname: "eyad", lastname: "orfi", age: 20, gender: "male"}
]

// const f_name = students.map((s) => {return s.firstname})

// console.log(f_name)

// // here we put a contionan
// const maleonly = students.filter((s) => {return s.gender === "male"} ); 
// console.log(maleonly)

// const persontofind = students.find((std) => {return std.firstname === "eyad"})
// console.log(persontofind)

// (start from, items that will takes) in the slice methed just take a copy
let studentsmove = students.slice(0, 2)
console.log(studentsmove)

// thire is somthing ather called splice that tkes the items from your array and put them in new array

// this is called spread operator 
let studentSP = [...students, "test"]

console.log(studentSP)