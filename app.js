let veeruimg=document.getElementById("viru-img")
let veeru=document.getElementById("viru")
var count = 0
veeru.addEventListener("click",function(){
    if (count=== 0){
    count = 1
    veeruimg.style.display="block";
    veeruimg.style.zIndex="1"
    }else{
        veeruimg.style.display = "none";
        count = 0;
    

    }
});

let sachinimg=document.getElementById("m-blaster-img")
let sachin=document.getElementById("m-blaster")
sachin.addEventListener("click",function(){
    sachinimg.style.display="block";
    sachinimg.onmouseleave=()=>{
        sachinimg.style.display="none";
    }
})

let gautamimg=document.getElementById("bjp-img")
let gautam=document.getElementById("bjp")
gautam.addEventListener("click",function(){
    gautamimg.style.display="block";
    gautamimg.onmouseleave=()=>{
        gautamimg.style.display="none";
    }
})
let viratimg=document.getElementById("chiku-img")
let virat=document.getElementById("chiku")
virat.addEventListener("click",function(){
    viratimg.style.display="block";
    viratimg.onmouseleave=()=>{
        viratimg.style.display="none";
    }
})

let dhoniImg=document.getElementById("mahi-img")
let dhoni=document.getElementById("mahi")
dhoni.addEventListener("click",function(){
    dhoniImg.style.display="block";
    dhoniImg.onmouseleave=()=>{
        dhoniImg.style.display="none";
    }
})

let yuvrajimg=document.getElementById("yuvi-img")
let yuvraj=document.getElementById("yuvi")
yuvraj.addEventListener("click",function(){
    yuvrajimg.style.display="block";
    yuvrajimg.onMouseLeave=()=>{
        yuvrajimg.style.display="none";
    }
})

let sureshimg=document.getElementById("rane-img")
let suresh=document.getElementById("rane")
suresh.addEventListener("click",function(){
    sureshimg.style.display="block";
    
    sureshimg.onMouseLeave=()=>{
        sureshimg.style.display="none";
    }
})


let singhimg=document.getElementById("bhajji-img")
let singh=document.getElementById("singh")
singh.addEventListener("click",function(){
    singhimg.style.display="block";
    
    singhimg.onMouseLeave=()=>{
        singhimg.style.display="none";
    }
})

let khanimg=document.getElementById("khan-img")
let khan=document.getElementById("khan")
khan.addEventListener("click",function(){
    khanimg.style.display="block";
    khanimg.onmouseleave=()=>{
        khanimg.style.display="none";
    }
})


let patelimg=document.getElementById("patel-img")
let patel=document.getElementById("patel")
patel.addEventListener("click",function(){
    patelimg.style.display="block";
    patelimg.onmouseleave=()=>{
        patelimg.style.display="none";
    }
})

let sreeshantimg=document.getElementById("shanth-img")
let sreeshant=document.getElementById("shanth")
sreeshant.addEventListener("click",function(){
    sreeshantimg.style.display="block";
    sreeshantimg.onmouseleave=()=>{
        sreeshantimg.style.display="none";
    }
})
