let prof = document.getElementById("prof")
let set = document.getElementById('set')
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")
let b5 = document.getElementById("b5")
let cele = document.getElementById('cele')
let sel = document.getElementById('sel')
let close = document.getElementById("close")
let inputfile = document.getElementById('input-file')
inputfile.onchange= function(){
    prof.src = URL.createObjectURL(inputfile.files[0])
          set.style.display ="contents"  
          set.style.position ="absolute"
          set.style.top ="200px"
          set.style.left ="550px"
          set.style.backgroundColor =  "aliceblue"
          cele.style.display = "none"
}
b1.addEventListener("click",()=>{
    prof.style.borderRadius = "0"
})
b2.addEventListener("click",()=>{
    prof.style.borderRadius = "5em"
})
b3.addEventListener("click",()=>{
    prof.style.borderRadius =  "20% 20% 50% 50%"
})
b4.addEventListener("click",()=>{
        prof.style.borderRadius = "50%"
})
b5.addEventListener("click",()=>{
    set.style.display = "none"
    cele.style.display = "contents"
   
    sel.src = prof.src
    sel.style.borderRadius = prof.style.borderRadius
    sel.style.width ="300px"
    sel.style.height ="300px"
})
b6.addEventListener("click",()=>{
    prof.style.borderRadius = "0px 172px 191px 200px"
})
b7.addEventListener("click",()=>{
    prof.style.borderRadius = "189px 172px 0px 200px"
})
close.addEventListener("click",()=>{
    set.style.display = "none"
    cele.style.display = "contents"
})