$(function(){
  var age = parseInt(prompt("Age?"));

  if(age >= 18) {
    $("#old-enough").show();
  } else {
    $("#not-old-enough").show();
  }
});
