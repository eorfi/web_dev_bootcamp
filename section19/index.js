// // $() = jQuery()
// $("h1").css("color", "red");


// // this is to check jQuery library is ready *And this is when you put  liks in the head section
// // and that means once our document is ready then its going to call the function
// // $(document).ready(function() {
// //     $("h1").css("color", "red");
// // })

// // selecting element with jQuery
// document.querySelector("h1");
// // or
// $("h1");
// $("h1.title");

// // To select all of our buttons
// document.querySelectorAll("button");


// // or

// $("botton")
// // And there's no difference between selecting one or selecting many



// ///////////////////////////////////////////////////////////

// // get the  current value of the css property

// console.log($("h1").css("h1"));
// console.timeLog($("h1").css("font-size "));
 
// // ading class from css
// $("h2").addClass("big-title");
// // This to remove the class
// $("h2").removeClass("big-title");

// // Adding and Removing multiple classes
// $("h2").addClass("big-title margin-50");

// // to chech if a element a have a class
// $("h2").hasClass("big-title"); 
// // the answer is True or False

///////////////////////////////////////////////////////////

// // Manipulating Text withing jquery
// $("h1").text("hi")

// $("button").text("x")

//////////////////////////////////////////

// // Manipulate attributes
// console.log($("img").attr("src"))

// $("a").attr("href", "https://www.yahoo.com")

/////////////////////////////////////

// Adding event liseners to our HTML elements using JQUREY

// $("h1").click(function(){
//     $("h1").css("color", "purple");
// });

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color="gold";
//     })
// }

// // this is how to do with jqurey
// $("button").click(function() {
//     $("h1").css("color", "red");
// });

// // Adding a key press event listener
// // $("input").keypress(function(event) {
// //     alert(event.key);
// // });


// $("input").keypress(function(event) {
//     $("h1").text(event.key);
// });

// // there's actually an even more glexible way of adding an event listener we can simply use the method "on", there is takes two methods the first one is the event that you're looking to listen for, and that can be any of the events that og the events


// $("h1").on("mouseover", function() {
//     $("h1").css("color", "pink");
// })

////////////////////////////////////////////////////////////////////////

// // use jquery to add new element on the fly, while our website is live and runing
// // $("h1").before("<button>New</button>");

// // $("h1").after("<button>New</button>");

// $("h1").prepend("<button>New</button>");

// $("h1").("<button>New</button>");

// $("h1").remove();



/////////////////////////////////////////////////////////////////////////

// common animations 

// this is how to do with jqurey
// $("button").click(function() {
//     $("h1").hide();
// });

// $("button").click(function() {
//     $("h1").toggle();
// });

// $("button").click(function() {
//     $("h1").fadeOut();
// });

// and the obbosit of it is fadein

// $("button").click(function() {
//     $("h1").slideUp();
// });

// $("button").click(function() {
//     $("h1").slidDown();
// });

// $("button").click(function() {
//     $("h1").slideToggle();
// });

// Then instead of using these pre-built ones you can use something called .animate and this allows you to define some custom css that you want to gradually animate towards
// you have to stick to things that have a numeric value

// العتامة
$("button").click(function() {  
    $("h1").animate({opacity: 0.5});
});

// if you want to have more than one of these animations happening, then you can chain them together.
$("button").click(function() {  
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});