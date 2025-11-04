let btn=document.querySelector(".btn");
let lightmode=true;
btn.addEventListener("click",()=>{
    lightmode = !lightmode;
    document.body.classList.toggle("dark");
})