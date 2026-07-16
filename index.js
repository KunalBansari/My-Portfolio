const nav = document.getElementById("middle-section");
const ham = document.getElementById("ham-logo")
ham.addEventListener('click', () =>{
    nav.classList.toggle("open");
});

// code for making and rendering the slider
let activeindex = 0;
const cards = document.querySelectorAll('.project-card');
const totalcards = cards.length;
const prevBtn = document.getElementById("left-arrow");
const nextBtn = document.getElementById("right-arrow");
// const cards = document.querySelectorAll("project-card")

function normalizeDelta(raw, n) {
    if (raw > n / 2) raw -= n;
    if (raw < -n / 2) raw += n;
    return raw;
  }

function placeArrows(){
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    const leftCard = document.querySelector(".role-left");
    const rightCard = document.querySelector(".role-right");
    const centerCard = document.querySelector(".role-center");

  
    if(window.innerWidth <= 630){
        centerCard.append(leftArrow);
        centerCard.append(rightArrow);
    } else {
        leftCard.append(leftArrow);
        rightCard.append(rightArrow);
    } 
}

function updateSliderUI() {
    const n = totalcards;

    cards.forEach((card, j) => {
      // Remove all role classes
      card.classList.remove(
        "role-left",
        "role-center",
        "role-right",
        "role-hidden"
      );

      // Compute fake index (relative position)
      let raw = j - activeindex;
      let fakeIndex = normalizeDelta(raw, n);

      // Assign role
      if (fakeIndex === 0) {
        card.classList.add("role-center");
      } else if (fakeIndex === -1) {
        card.classList.add("role-left");
      } else if (fakeIndex === 1) {
        card.classList.add("role-right");
      } else {
        card.classList.add("role-hidden");
      }
    });        
    placeArrows();
}

// Button logic
nextBtn.addEventListener("click", () => {
activeindex = (activeindex - 1) % totalcards;
updateSliderUI();
});

prevBtn.addEventListener("click", () => {
activeindex = (activeindex + 1 ) % totalcards;
updateSliderUI();
});

// Initial render

updateSliderUI();
window.addEventListener("resize", placeArrows);


dragDrop();


function dragDrop(){
  let isDragging = 0;
  let startX = 0;
  let diffX = 0;
  let endX = 0;
  
  const circle = document.querySelector('.circle');
  const hideArrow = document.querySelector('.circle-div-icon');
  const showContact = document.querySelector('.lets-talk-container');
  const fadeMain = document.querySelector('.main');
  
  circle.addEventListener('mousedown', (event) => {
    isDragging = 1;
    startX = event.clientX;
    circle.style.transition = 'none';
    hideArrow.classList.add("hidden");
    
  });
  
  circle.addEventListener('mousemove', (event) =>{
    
    if(isDragging){
      diffX = event.clientX-startX;
      endX = event.clientX;
      circle.style.transform = `translateX(${diffX}px)`;
      
    }
    
    if(diffX > 300 || diffX < 0){
      isDragging = 0;
      diffX = 0;
      hideArrow.classList.remove("hidden");
      
    }
    if(diffX>= 150){
      showContact.classList.remove("hidden");
      fadeMain.classList.add("fades-out");
    }
  });
  
  window.addEventListener('mouseup', (event) =>{

    isDragging = 0;
    diffX = 0;
    
    circle.style.transition = 'transform 0.9s ease';
    circle.style.transform = 'translateX(0px)';
    hideArrow.classList.remove("hidden");
    // fadeMain.classList.add("fades-out");

    
    const hideContact = document.querySelector(".close-btn");
    hideContact.addEventListener("click", () => {
      showContact.classList.add("hidden");
      fadeMain.classList.remove("fades-out");

    });

  });  

}

