// // api Aplication Programming Interface
 
// // first step of any applicatin npm init -y 2- npm install express 3- npm i nodemon

// // Epress is an backend API framework

// // const express = require("express")
// // require = import


// // endpoints HTTP METHODS
// // Get - Retrive Data
// // (request , respons)
// // Post - 
// // Put
// // Delete

// // API Application Programming Interface

// // Express is a backend API framework

// // const express = require("express")
// // require = import

// // endpoints HTTP METHODS
// // Get - Retrieve Data
// // (request , response)
// // Post - creat data
// // Put
// // Delete

import express from "express"

const app = express()

// to can get the josn data from a post requset the data must go with midllware
// midllware is meanes وصيط 
// you can with to typs of middlewares 

app.use(express.json())

// or

// body-parser
// npm install body-parser
// import bodyParser from "body-parser"


const port = 3000
const users = []

// app.get("/", (req, res) => {
//     res.send('home page');  // Correct usage of 'res'
// });

// // Endpoints HTTP Methods
// // Get - Retrieve Data
// app.get('/hello', (req, res) => {
//     res.send('hello world');  // Correct usage of 'res'
// });


// app.post('/postdata', (req, res) => {
//     res.send("created! ")
// })

// // Listen on port 3000

// // modemon get the new changes and make atou refrech

// // postman is a tool to make amd test all of your requstes 

///////////////////////////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("<h1> hello form express </h1>");
})

app.get("/users", (req, res) => {
  if(users.length === 0){
    res.status(500).send("No users founds")
    return
  }
  res.status(201).send(users);
});

app.post("/users", (req, res) => {
  const user = req.body
  const find_user = users.find((u) => u.id === user.id) // *
  if(find_user) {
    res.status(500).send("user already creaded")
    return // you do this return to stpo the code bec if the cod contnue it will be an error
  }
  users.push(user);
  res.status(200).send("User created")

})

// app.delete('/users/:id', (req,res) => { // in delete method it must noke the id in the parmters 
//   const {id} = req.params
//   const finduserindex = users.findIndex((u) => u.id === id)
//   // if(finduserindex != -1){ // != -1 that mens it's find it bec -1 means ملاتوش 

//   // }
//   // or
//   if (findUserIndex === -1) { // If the user is not found
//     res.sendstatus(500).send("User not found to be deleted!");
//     return;
//   }

//   users.splice(findUserIndex, 1);
//   res.sendstatus(200).send("User deleted successfully!");
// }); 

// DELETE - Remove data
app.delete('/users/:id', (request, response) => {
  const { id } = request.params
  const findUserIndex = users.findIndex((x) => x.id === id)
  if(findUserIndex == -1) {
      response.status(400).send("User not found!")
      return
  }
  users.splice(findUserIndex, 1)
  response.status(200).send("User deleted successfully!")
})

app.listen(port, () => {
    console.log("app is running at port 3000");  // Correct spelling of 'running' and 'port'
});