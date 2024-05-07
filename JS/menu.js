
const toggle = document.getElementById("quick-menu");
const element = document.getElementById("heading");
var state = false;


{toggle.addEventListener("click", () => {

if(state === false)
  {  
    element.style.transform = "translateX(0px)";
    state = true;
}
else
    {
        element.style.transform = "translateX(-3000px)"
        state=false;
    }
    element.style.display = 'flex';
});}