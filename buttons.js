let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
  if(popbutton.classList.contains("pop") == true){
    popbutton.classList.remove("pop")
  }else{
    popbutton.classList.add("pop")
  } 
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
  if(bigbutton.classList.contains("big") == true){
    bigbutton.classList.remove("big")
  }else{
    bigbutton.classList.add("big")
  } 
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
  if(fancybutton.classList.contains("fancy") == true){
    fancybutton.classList.remove("fancy")
  }else{
    fancybutton.classList.add("fancy")
  } 
})

let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
  if(negativebutton.classList.contains("negative") == true){
    negativebutton.classList.remove("negative")
  }else{
    negativebutton.classList.add("negative")
  } 
})

let awesomebutton = document.querySelector("#awesomebutton")

awesomebutton.addEventListener("click", e => {
  if(awesomebutton.classList.contains("awesome") == true){
    awesomebutton.classList.remove("awesome")
  }else{
    awesomebutton.classList.add("awesome")
  } 
})

