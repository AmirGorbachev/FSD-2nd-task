document.addEventListener("DOMContentLoaded", function(){
  let likes = document.querySelectorAll(".like-button__inner");
  
  for(let i=0; i<likes.length; i++){
    likes[i].addEventListener("click", function(event){
      let value = this.querySelector(".like-button__amount").innerHTML;

      if(this.classList.contains("like-button__inner--active")) value--;
      else value++;

      this.querySelector(".like-button__amount").innerHTML = value;
      this.classList.toggle("like-button__inner--active");
    })
  }
});