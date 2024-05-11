let data=JSON.parse(localStorage.getItem("cartdata"));
let items=document.getElementById("items");
let noitems=document.getElementById("noitem");
let total=document.getElementById("total")


if (data.length > 0) {
    noitems.style.display = 'none';
    data.forEach(element => {
        let divi1=document.createElement("div");
        divi1.setAttribute("class","divi1");
        divi1.innerHTML=`<img src='${element.image}' alt='' height='50%' width='60%' >
        <h1>${element.title}</h1>
        <p>Price : &dollar;${element.price}</p>
        `
        items.appendChild(divi1);
    });
}





