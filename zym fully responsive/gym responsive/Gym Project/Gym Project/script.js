 
const btn = document.querySelector('.nav_btn');

btn.addEventListener('click', function(){
    document.querySelector("form").classList.add("active");
})




 
 const cancel = document.getElementById("cancell_btn");                    

 cancel.addEventListener("click" ,function(){
    document.querySelector("form").classList.remove("active");
    confirm('are you sure you are cancel')
   
 })

 

 const buy_plan = document.getElementById("buy_plan");

 buy_plan.addEventListener("click" ,function(){
    document.querySelector("form").classList.remove("active");
   
 })

  
 const humburger = document.querySelector('#Hummenu');

humburger.addEventListener('click', function(){
    document.querySelector(".nav_li").classList.add("active");
})


const hmenu = document.querySelector("#Hummenu")

hmenu.addEventListener('click', function(){
    this.remove()
})


humburger.addEventListener('click', function(){
    document.querySelector("#cancel").classList.add("active");

     
    
})

var fastmfast = document.querySelector('#cancel')
fastmfast.addEventListener('click' , function(){
     
})

const menucancel = document.querySelector("#cancel")

menucancel.addEventListener('click' , function(){
    document.querySelector(".nav_li").classList.remove("active")
   
})


menucancel.addEventListener('click' , function(){
    this.remove()

    document.querySelector("#Hummenu").classList.add("active");  
})

 

 

var myindex = 0;

carousel();

function carousel() {
    var x = document.getElementsByClassName("section_image1")
    for(let i = 0; i< x.length ; i++){
        x[i].style.display = "none";
    }
    myindex++;

    if(myindex  > x.length){myindex = 1}
    x[myindex - 1].style.display = "block"
    setTimeout(carousel , 1500);
    
}


