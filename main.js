// sanity check:
console.log("main.js is linked");


// keycode:
// a = 97
// l = 108



// BROKEN CODE BELOW
// var i = 2;
// $(document).on("keypress", function loneOne(event){
//     if(event.key === "l"){
//     $(".laneOneBox.box"+ x ).append("<img src='imgs/trunning-rabbit.png'> ");
//     i++;
//   }
// });


// CORRECT CODE BELOW


var i = 2;
$(document).on("click", function laneOne(e){
  // Image is appended to box by altering the class name with "i"
  $(".laneOneBox.box" + i).append("<img src='imgs/running-rabbit.png'> ");
  // Once "i" sets the class name to the final box, the .remove() is no longer called
  if (i < 13){
    $(".laneOneBox.box" + (i - 1) + " img").remove();
  }
  // variable "i" is set outside the function, and incrimented within
  else {
    alert("Hare has Won!")
  }

  // else {  (i => 13){
  //   $(".winning").append("<img src='#'> ");
  // }

  i++;
});

var x = 2;
$(document).on("keypress", function laneTwo(event){
  // "keypress" event (couldn't figure out how to do keypress for both pawns) with AND conditional to prevent the final tortoise disappearing
    if(event.key === "a" && x < 13){
      $(".laneTwoBox.box"+ x ).append("<img src='imgs/tortoise.png'> ");
      $(".laneTwoBox.box" + (x - 1) + " img").remove();
      // variable "x" is set outside the function, and incrimented within


    } else if  (event.key === "a" && x == 13){
      alert("Tortoise has won!");
      // $(".winning").append("<img src='#'> ");
    }
    x++;
  });


// WORKS WITH "CLICK"
// var i = 2;
// $(".laneTwoRow").keypress(function laneTwo(e){
//   console.log("i",i)
//   $("laneTwoBox.box"+i).append("<img src='imgs/tortoise.png'> ");
//   i++;
// });
