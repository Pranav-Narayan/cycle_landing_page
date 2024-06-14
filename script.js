let menu=document.getElementById('menu')
let respnav=document.getElementById('respnav')
let mynav=document.getElementById('mynav')
let close=document.getElementById('close')

menu.addEventListener('click',()=>{
    respnav.classList.add('toggle')
    mynav.classList.add('toggle')
})

close.addEventListener('click',()=>{
    respnav.classList.remove('toggle')
    mynav.classList.remove('toggle')
})


// ************************************

let green=document.getElementById('green')
let blue=document.getElementById('blue')
let red=document.getElementById('red')

let fwicon=document.getElementById('forward')
let bwicon=document.getElementById('backward')



let start=0
let li=[green,blue,red]

fwicon.addEventListener('click',()=>{
    if(start==0){
        li[0].style.display='none';
        li[1].style.display='block';
        li[2].style.display='none'
        start++
    }
    else if(start==1){
        li[0].style.display='none';
        li[1].style.display='none';
        li[2].style.display='block'
        start++
    }
    else{
        li[0].style.display='block';
        li[1].style.display='none';
        li[2].style.display='none'
        start=0
    }
})

bwicon.addEventListener('click',()=>{
    if(start==2){
        li[0].style.display='none';
        li[1].style.display='block';
        li[2].style.display='none';
        start--
    }
    else if(start==1){
        li[0].style.display='block';
        li[1].style.display='none';
        li[2].style.display='none'
        start--
    }
    else{
        li[0].style.display='none';
        li[1].style.display='none';
        li[2].style.display='block';
        start=2
    }
})
