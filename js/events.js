//define functions here

$(document).ready(function(){

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

});
