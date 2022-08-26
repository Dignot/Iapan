(function(){
    const header=document.querySelector(`.header`);
    window.onscroll=()=>{
        if(window.pageYOffset>500 ){
            header.classList.add(`header_activ`)
        } 
        else{header.classList.remove(`header_activ`)

        }
    }
}());

//burger

(function(){
    const burgerItem=document.querySelector(`.burger`);
    const menu=document.querySelector(`.header_nav`)
    const menuClose=document.querySelector(`.heder_nav_close`)
    burgerItem.addEventListener(`click`,()=>{
        menu.classList.add(`header_nav_active`);
    })
    menuClose.addEventListener(`click`,()=>{
        menu.classList.remove(`header_nav_active`);
    })
}())

