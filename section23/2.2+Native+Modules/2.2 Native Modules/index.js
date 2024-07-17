const fs = require("fs");
// which is  short for file system
// the one to use is called fs.writeFile bec this is going to allow us to take a message that say user inputs from some bit of our website

// fs.writeFile("message.tet", "Hello from nodeJS!", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// // and because i'm not puting in a full path here it's going to create in the same parent folder


// this is how to read the file and get text from it
// we wright here utf 8 to make the outout test not sometheng called Buffer


// UTF-8 (Unicode Transformation Format - 8-bit) is a character encoding standard used to represent text in computers and other devices. It is designed to handle all characters in the Unicode standard, which includes nearly all characters from all written languages.


fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
})

