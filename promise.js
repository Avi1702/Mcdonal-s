// let all=document.querySelectorAll(".chicken")

// for(i=0;i<all.length;i++){
//     // console.log(all[i].value)
//     all[i].addEventListener("click",show)
        
    
// }
// // let count=0
// function show(e){
// let get=JSON.parse(localStorage.getItem("myfood"))
// let arr
// if(get===null){
//     arr=[]
// }
// else{
//     arr=get
// }
// arr.push(e.target.value)
// // count++
// localStorage.setItem("myfood",JSON.stringify(arr))
// alert("item added to cart")
// window.location.reload()
// }

// document.getElementById("count").innerText=JSON.parse(localStorage.getItem("myfood")).length


// let orderbtn=document.getElementById("orderfood")
// orderbtn.addEventListener("click",solve)


// function solve(){

//  console.log("hi")
//  let promise=new Promise(function(resolve,reject){
  

//     setTimeout(()=>{
//         let order=true
//         if(order){
//          resolve();
//         }else{
//             reject();
//         }
//     },3000);


// });
// return promise;
// }


// solve().then(function(){
//     console.log("order placed")
//        // window.location.href="./cart.html"
//      }).catch(function(){
//          console.log("order not placed!!")
//      })



// naya code idarse shuru hoga baap
let btn=document.getElementById("orderfood")

let isopen=true

let createorder=(orderItems)=>{
//     console.log(items)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(isopen){
                resolve(orderItems);
            }
            else{
                reject("can't create order because shop is closed")
            }
        }, 2000);
    })
}

btn.addEventListener("click",()=>{
    let items=document.querySelectorAll("#items div");

    var orderItems=[]

    for(let i=0;i<items.length;i++){
    
      
        if(items[i].lastChild.checked){
            orderItems.push(items[i].children[0].src)
        }
         
        
    }

    createorder(orderItems)
    .then((items)=>{
       
      
        let main=document.createElement("div")
        main.setAttribute("id","main")
        // console.log("notify user the order is ready");
    //    window.location.href="cart.html"
    for(i=0;i<items.length;i++)
    {
        console.log(items[i])
     
        
        let box=document.createElement("div")
        let image=document.createElement("img")
        image.src=items[i]
        box.append(image)
        
       
        main.append(box)

    }

    
   document.querySelector("body").innerHTML=""
   let back=document.createElement("a")
   back.innerText="back"
   back.href="promise.html"
   let mainhead=document.createElement("h1")
   mainhead.innerText="Order Received"
   let head=document.createElement("h3")
   head.innerText="Your Ordered Items"
    document.querySelector("body").append(back,mainhead,head,main)
    //    console.log(items)
    })

    .catch((err)=>{
        console.log(err);
    })
})