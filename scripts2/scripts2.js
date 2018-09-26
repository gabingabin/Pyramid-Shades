let bigImg = document.querySelector(".primarySlide img")
let title = document.querySelector(".primarySlide h2")
let thumbnails = document.querySelectorAll(".slides li img")

for (let i = 0; i < thumbnails.length; i++){
  thumbnails[i].addEventListener('click',function(){
    let altTxt=this.getAttribute('alt')
    let bigImgsrc=this.getAttribute('data-bigImg')
    title.innerHTML=altTxt
    bigImg.setAttribute('src', bigImgsrc) 
    bigImg.setAttribute('alt', altTxt)

    document.querySelector(".current").classList.remove("current")
    this.parentNode.classList.add("current")
