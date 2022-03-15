console.log(document)
var plus_buttons = document.querySelectorAll('.plus')
let minus_buttons = document.querySelectorAll('.minus')
console.log(minus_buttons)
console.log(plus_buttons)
let like_buttons = document.querySelectorAll('.like')
console.log(like_buttons)
let unit_price=document.querySelectorAll(".unitPrice")
let price=document.querySelectorAll(".price")
let quantity =document.querySelectorAll('p')
let Total= document.querySelector("#total")
let corbeille= document.querySelectorAll(".delete")
console.log(Total.innerHTML)


function inc(e, i){
    var cible = e.target
    console.log(cible)
    var div = cible.parentElement
    console.log(div)
    var p = div.querySelector('p')
    var value = Number(p.innerHTML)
    console.log(typeof value)
    value++
    p.innerHTML = value
    console.log(i)
    
    let p_u=Number(unit_price[i].innerHTML)
    let p_a=Number(price[i].innerHTML)
    console.log(p_a)
    price[i].innerHTML=p_u*value
    let tot =0
    for (let elements = 0; elements < price.length; elements++) {
        tot+= Number(price[elements].innerHTML)
        
        
    }
    Total.innerHTML=tot
    // let p_u= cible.parentElement.parentElement.parentElement('.unitPrice')
    // console.log(p_u)
    // console.log(typeof (p_u))
   

}

function dec(e,i) {
    let cible=e.target 
    let p=cible.parentElement.querySelector('p')
    let value = Number(p.innerHTML)
    if (value>0) {value--
        }
    p.innerHTML=value
    let p_u=Number(unit_price[i].innerHTML)
    let p_a=Number(price[i].innerHTML)
    console.log(p_a)
    price[i].innerHTML=p_u*value
    let tot =0
    for (let elements = 0; elements < price.length; elements++) {
        tot+= Number(price[elements].innerHTML)
        
        
    }
    Total.innerHTML=tot
}
// function price_fu()
//     for (let azerty = 0; azerty < plus_buttons.length; azerty++) {
//         console.log(typeof (price[azerty]))
//      console.log(Number(quantity[azerty].innerHTML))
//      console.log(Number(unit_price[azerty].innerHTML))
//      let tot=Number(unit_price[azerty].innerHTML)*Number(quantity[azerty].innerHTML) 
//      console.log(tot)
//         price[k].innerHTML=tot
//     }

 for (let i = 0; i < plus_buttons.length; i++) {
        plus_buttons[i].addEventListener('click',(e) => inc(e, i))
        minus_buttons[i].addEventListener('click',(e) => dec(e,i))
        // plus_buttons[i].addEventListener('click',price_fu)
        // minus_buttons[i].addEventListener('click',price_fu) 
     
     }
for (let del = 0; del < corbeille.length; del++) {
    corbeille[del].addEventListener('click',(k) => remove(k,del))
    
}
function remove(k,del){
let cible = k.target
console.log(corbeille[del].parentElement.parentElement.parentElement)
let row=corbeille[del].parentElement.parentElement.parentElement
console.log(row)
row.remove()
// tab.removeChild([del+1])
// document.tab.deleteRow(del+1);

}
// document.getElementById("myTable").deleteRow(0);


function change_to_red_color(e){

    let cible=e.target
    console.log(cible)
    if (cible.style.color !== "red"){
     cible.style.color = "red"
    } else cible.style.color = "black"
    }


for (let j = 0; j < like_buttons.length; j++) {
    like_buttons[j].addEventListener('click',change_to_red_color )
    
}


var total = document.querySelector('#total')
