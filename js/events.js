//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt(){
  $('img').on('load', function(img){
    img.classList.add("tasty");
  });
}

function pressIt(){
  $('input').on('keydown', function(key){
    if(key.which===13){
      alert('Your pressed G!');
    }
  });
}

function submitIt(){
  $('input').on('submit', function(){
      alert("Your form is going to be submitted now.");
  });
}


$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();


});
