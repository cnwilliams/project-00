



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

  $(".laneOneBox.box" + i).append("<img src='imgs/running-rabbit.png'> ");

  if (i < 13){
    $(".laneOneBox.box" + (i - 1) + " img").remove();
  }

  i++;
});

var x = 2;
$(document).on("keypress", function laneTwo(event){
    if(event.key === "a"){
    $(".laneTwoBox.box"+ x ).append("<img src='imgs/tortoise.png'> ");
    $(".laneTwoBox.box" + (x - 1) + " img").remove();

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