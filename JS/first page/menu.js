
const toggle = document.getElementById("quick-menu");
const element = document.getElementById("heading");
var state = false;


{toggle.addEventListener("click", () => {

if(state === false)
  {  
    element.style.opacity = 1;
    state = true;
}
else
    {
        element.style.opacity = 0;
        state=false;
    }
    element.style.display = 'flex';
});}