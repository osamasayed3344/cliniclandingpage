//---------------------------------------------------------
const matchMedia=window.matchMedia("(min-width:431px)");
const navbarBody=document.getElementById("navbarBody");
const navbarBodyMobile=document.getElementById("navbarBodyMobile");

function Handlemediaquery(e)
{
    navbarBody.innerHTML="";
    navbarBodyMobile.innerHTML="";
    navbarBodyMobile.style.height="0rem";
    if(e.matches)
    {
        navbarBody.appendChild(displaymenubtn());
    }
    else
    {
        navbarBody.appendChild(displayNavBody());
    }
}

Handlemediaquery(matchMedia);


matchMedia.addEventListener("change",Handlemediaquery);

//-------------------------click menu------------------------------
let IsValid=true;
function clickmenubtn()
{
    navbarBodyMobile.innerHTML='';
    navbarBody.innerHTML='';
    if(IsValid)
    {
        IsValid=false;
        navbarBody.appendChild(displaymenubtn('<i class="fa-solid fa-xmark" style="zoom:250%"></i>'));
        navbarBodyMobile.appendChild(displayNavBody());
        navbarBodyMobile.style.height="15rem";
    }
    else
    {
        IsValid=true;
        navbarBody.appendChild(displaymenubtn('<i class="fa-solid fa-bars" style="zoom:250%"></i>'));
        navbarBodyMobile.innerHTML='';
        navbarBodyMobile.style.height="0rem";
    }
}

//------------------------------------------------------------------------

function displayNavBody()
{
    const ul=document.createElement("ul");
    ul.className="navbar-nav h-100 justify-content-between align-item-center p-2";
    ul.innerHTML='<li class="navbar-item px-5"><a class="navbar-link text-decoration-none text-white item-center" href="#mainpage">الرئيسة</a></li>'+
            '<li class="navbar-item px-5"><a class="navbar-link text-decoration-none text-white item-center" href="#">عن الدكتور</a></li>'+
            '<li class="navbar-item px-5"><a class="navbar-link text-decoration-none text-white item-center" href="#ourservices">خدمتنا</a></li>'+
            '<li class="navbar-item px-5"><a class="navbar-link text-decoration-none text-white item-center" href="#">تواصل معنا</a></li>';
    return ul;
}

function displaymenubtn(menuBody='<i class="fa-solid fa-bars" style="zoom: 250%;"></i>')
{
    const menubtn=document.createElement('button');
    menubtn.className='btn pe-auto';
    menubtn.innerHTML=menuBody;
    menubtn.onclick=clickmenubtn;
    return menubtn;
}
