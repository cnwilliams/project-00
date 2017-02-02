



// sanity check:
console.log("main.js is linked");


// keycode:
// a = 97
// l = 108


// var i = 1;
// $(".laneOneRow").on("click", function laneOne(e){
//   // console.log("i",i)
//   $(".box"+i).html("here");
//   i++;
// });

var i = 2;
$(".laneOneRow").on("click", function laneOne(e){
  // console.log("i",i)
  $(".laneOneBox.box"+i).append("<img src='imgs/running-rabbit.png'> ");
  i++;
});


// CORRECT CODE BELOW
// var i = 2;
// $(".laneOneRow").on("click", function laneOne(e){
//   // console.log("i",i)
//   $(".laneOneBox.box"+i).append("<img src='imgs/running-rabbit.png'> ");
//   i++;
// });

var x = 2;
$(document).on("keypress", function laneTwo(event){
    if(event.key === "a"){
    $(".laneTwoBox.box"+ x ).append("<img src='imgs/tortoise.png'> ");
    x++;
  }
});


// WORKS WITH "CLICK"
// var i = 2;
// $(".laneTwoRow").keypress(function laneTwo(e){
//   console.log("i",i)
//   $("laneTwoBox.box"+i).append("<img src='imgs/tortoise.png'> ");
//   i++;
// });



// $(".laneOneRow").on("click", function laneOne(e){
// // move right
// // clear previous
//   var i = 1;
//   var boxNum = (".box" + i);
//   $(boxNum).append($(".playerOne"));
//   var i = i + 1;
// });

// $(".laneOneRow").on("click", function laneOne(e){
//   var i = 2;
//   var boxNum = ("box" + i);
//   $(".playerOne").appendTo(boxNum);
//   // var i = i + 1
// });

// $(".laneOneRow").on("click", function laneOne(e){
//   var i = 3;
//   var boxNum = ("box" + i);
//   $(".playerOne").appendTo("boxNum");
//   // var i = i + 1
// });






 // for (var i = 0; i < $laneOneBoxArr.length; i++){
 //    $(".laneOneBox").eq(i).text("x");
 //  }