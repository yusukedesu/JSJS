const pullDownButton = document.getElementById("lists");
pullDownButton.addEventListener("mouseover",function(){
  console.log("乗った時は青色");
    pullDownButton.setAttribute("style","background-color:blue;");
});

pullDownButton.addEventListener("mouseout",function(){
  console.log("外れた時は赤色");
    pullDownButton.removeAttribute("style","background-color:red;");
});

pullDownButton.addEventListener("click",function(){
  console.log("クリックした時は緑色");
    pullDownButton.setAttribute("style","background-color:green;");
});
