function ativarMenuMobile(){
    const header = document.querySelector("header");
    header.classList.toggle("active");
}

function navegarMenuMobile(){
    const li = document.querySelectorAll("ul li a");
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