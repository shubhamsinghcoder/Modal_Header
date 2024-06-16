let button = document.getElementById("btn");
let main = document.getElementById("myMain");
let closeBtn = document.getElementById("close");

button.addEventListener('click',()=>{
  document.getElementById("myMain").style.display = "block"
  button.style.display = "none"
})

closeBtn.addEventListener('click',()=>{
  document.getElementById("myMain").style.display = "none";
  button.style.display = "block"
})

window.onclick = function(event){
  if(event.target === main){
    main.style.display = "none";
  }
}