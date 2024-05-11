let leftaside=document.getElementById("leftaside");
let rightaside=document.getElementById("rightaside");
let btn=document.getElementById("lbtn");
const cartdata=[];
// console.log(leftaside)
// console.log(rightaside)
 let fetchthedata=async function(){
    let res=await fetch('https://fakestoreapi.com/products');
    // console.log(res);
    let data=await res.json()
    // console.log(data);
    displaydata(data);
} 
fetchthedata();

function displaydata(fetchthedata){
    fetchthedata.forEach(element => {
        // console.log(element)
         let division1=document.createElement("div")
        division1.setAttribute("class","leftaside-div");
        division1.innerHTML=`<img src='${element.image}' alt='' height='50%' width='60%' >
        <h1>${element.title}</h1>
        <p>Price : &dollar;${element.price}</p>
        `
        leftaside.appendChild(division1);
        // console.log(division1)
        division1.addEventListener("click",()=>{
            displaysingledata(element);

        })
    });
}
function displaysingledata(element){
    // console.log(element);
    rightaside.innerHTML=`<img src='${element.image}' src='' hight='70%' width='35%' >
    <div class='details-block'>
    <h2>${element.title}</h2>
    <p>${element.description}</p>
    <b>Price : &dollar;${element.price}</b>
    <button class="cart-button" id="cartbutton"><span>Add to cart</span></button>
    </div>
    `
    let cartbutton=document.getElementById("cartbutton");
    cartbutton.addEventListener('click',()=>{
        cartdata.push(element);
        console.log(cartdata);
        localStorage.setItem("cartdata",JSON.stringify(cartdata));
    })
}