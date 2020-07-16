document.addEventListener("DOMContentLoaded", function(){
  const checkboxLists = document.querySelectorAll(".checkbox-list");

  for (var i = checkboxLists.length - 1; i >= 0; i--) {
    const title = checkboxLists[i].querySelector(".checkbox-list__title");
    const arrow = checkboxLists[i].querySelector(".checkbox-list__arrow");
    const content = checkboxLists[i].querySelector(".checkbox-list__content");
    title.addEventListener("click", function(event){
      arrow.classList.toggle("checkbox-list__arrow--rotate");
      content.classList.toggle("checkbox-list__content--none");
    })
  }
});