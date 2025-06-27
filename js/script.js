const navbar=document.querySelector(".hide-nav");
const menubar=document.querySelector(".hide-menu");

let IsValid=true;
function visableNav(){
    if(IsValid)
    {
        IsValid=false;
        navbar.style.display="flex";
        menubar.innerHTML='<i class="fa-solid fa-xmark" style="zoom:250%"></i>';
    }
    else
    {
        IsValid=true;
        hideNav();
        menubar.innerHTML='<i class="fa-solid fa-bars" style="zoom: 250%;"></i>';
    }
}

function hideNav(){
    navbar.style.display="none";
}