document.query
var tag = document.firstElementChild.lastElementChild.lastElementChild.lastElementChild;
tag.innerHTML = "eyad";

// and this is anther way to do the callange.

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "Angela";

//////////////////////////////////////////////////////////

document.getElementsByTagName("li")[2].style.color = "green";

document.getElementsByClassName("btn")[0].style.color = "red";
// the button element is like as using a list you must set the position of it and if it is single element srt it 0
// because this ia plural element

document.getElementById("title").innerHTML = "hello_world";

//////////////////////////////////////////////////


document.querySelector("#title");

document.querySelector(".btn");

document.querySelector("li a");

document.querySelector(".list").style.color = "red";

document.querySelector(".list a").style.color = "red";


// This is importante
// https://www.w3schools.com/jsref/dom_obj_style.asp

document.querySelector("h1").style.fontSize = "10rem";


document.body.querySelector(".btn").style.backgroundColor = "blue";


/////////////////////////////////////////////

document.querySelector("button").classList;

document.querySelector("button").classList.add("invisible");
// now this allows us to do is we can tap intothe stylesheet
// and we can create a separate style for the invisible class and can say, maybe, visablity = hidden as we can see in the style sheet


///////////////////////////////////

// now in addition to add, we can also remove. so now, at a different stage, l want my button to reappear
// then we can simpily remove that invisible class and all of the styles that are associated with that class gets taken off that botton 
// that ethode is called toggle that means is the class invisible is already applied then remove it, else applied it

document.querySelector("button").classList.toggle("invisible");

//////////////////////////////////////

// add a class
document.querySelector("h1").classList.add("huge");
// removing a class
document.querySelector("h1").classList.toggle("huge");


//////////////////////////////////////

// to change the text

document.querySelector("h1").innerHTML = "eyad";
// not
document.querySelector("h1").textContent = "eyad";

//////////////////////////////////////

// Manipulating HTML Element Attributes
// the attribute are all the things that get colored in orange in atom, so for example, class is an attribute, or href for an anchor tag
// is the attribute, or the src for  image. They're all attributes. Everything that goes inside the tag, other the tag name itself, are attributes


// that gets us our first anchor tag 
document.querySelector("a");

// that will give us a list of all attribetd 
document.querySelector("a").attributes;

// retrieve the current value of that attribute 
document.querySelector("a").getAttribute("href");

// one is which attribute do you want to change, the second one is what to change it to,
document.querySelector("a").setAttribute("href", "https://gemini.google.com/app");



