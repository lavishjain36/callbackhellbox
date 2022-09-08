const div=document.querySelector(".box");
div.addEventListener("click",function(){
  div.innerHTML="Clicked";
  setTimeout(function(){
  div.classList.add('circle');
  setTimeout(function(){
    div.style.backgroundColor="blue";
    div.style.fontSize="100px";
    setTimeout(function(){
      div.classList.remove('circle');
    },250)
  },500)
},2000)
})


// Callback hell =>Callback hell is one of the problem that occurs when you nest one function inside another function