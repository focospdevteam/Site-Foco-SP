function ativarMenuMobile(){
    const header = document.querySelector("header");
    header.classList.toggle("active");
}

function navegarMenuMobile(){
    const li = document.querySelectorAll(".nav-menu ul li a");
    li.forEach((item)=>{
        item.addEventListener("click",ativarMenuMobile)
        item.addEventListener("click",(event)=>{
            li.forEach((item)=>{
                item.classList.remove("active")
            })
            event.currentTarget.classList.toggle("active");
        })
    })
}

function ativarflip(){
    const buttons = document.querySelectorAll(".card a");
    const cards = document.querySelectorAll(".card .flip")
    let last = 0
    buttons.forEach((item,index)=>{
        item.addEventListener("click",(evt)=>{
            evt.preventDefault()
            let flip_card = item.offsetParent.offsetParent
            if(flip_card.style.transform == "rotateY(180deg)"){
                flip_card.style.transform =  "rotateY(360deg)";
            }else{
                flip_card.style.transform =  "rotateY(180deg)";
            }            
            // cards[index].classList.toggle("active")
        })
    })
}