let btn=document.getElementById("registor");
let btn2=document.getElementById("login");
let btn3=document.getElementById("Registorb");
let loginpage=document.getElementById("loginpage");
let registorpage=document.getElementById("registorpage");
let main=document.getElementById("main");

btn.addEventListener("click",()=>{
    loginpage.style.transform="translateX(-400px)";
    registorpage.style.transform="translateX(-280px)";
    main.style.height="600px";
    main.style.transition="all ease .5s";
})
btn2.addEventListener("click",()=>{
    loginpage.style.transform="translateX(0px)";
    registorpage.style.transform="translateX(250px)";
    main.style.transition="all ease .5s";
    main.style.height="500px";
})
btn3.addEventListener("click",()=>{
    loginpage.style.transform="translateX(0px)";
    registorpage.style.transform="translateX(250px)";
    main.style.transition="all ease .5s";
    main.style.height="500px"; 
})