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

function drawCurve(){
  const points = [
    {cp1 : {}},
    {cp2 : {}},
    {cp3 : {}},
    {cp4 : {}},
    {cp5 : {}},
    {cp6 : {}},
    {cp7 : {}},
    {cp8 : {}},
    {cp1 : {}}
  ]
  for(let i = 0; i<points.length; i++){

  }
  // const place = document.getElementById("canvas");

  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(
    0,0,1200,0
  );

  gradient.addColorStop(0.2, "#b14a1b");
  gradient.addColorStop(0.4, "#1d9128");
  gradient.addColorStop(0.6, "#265cdb");
  gradient.addColorStop(0.8, "#da22be");

  // to ensure that the curve blends smoothly 
  // let vectorX = J.x - C2.x;
  // let vectorY = J.y - C2.y;

  // // Scale multiplier (k = 1 for a perfectly mirrored, uniform C1 blend)
  // let k = 1.0; 

  // // Calculate the smooth predicting point for Curve B's first handle
  // let C3 = {
  //   x: J.x + (vectorX * k),
  //   y: J.y + (vectorY * k)
  // }; 

  const w = canvas.width;
  const h = canvas.height;

  const P0 = { x: 0, y: 190 };

  const C1 = { x: 90, y: 180 };
  const C2 = { x: 110, y: 270 };

  const P1 = { x: 180, y: 270 };

  const C3 = { x: 300, y: 270 };
  const C4 = { x: 300, y: 160 };

  const P2 = { x: 400, y: 160 };

  const C5 = { x: 500, y: 160 };
  const C6 = { x: 520, y: 200 };

  const P3 = { x: 550, y: 260 };

  const C7 = { x: 580, y: 320 };
  const C8 = { x: 800, y: 560 };
  const P4 = { x: 860, y: 460 };

  const C9 = { x: 920, y: 360 };
  const C10 = { x: 700, y: 100 };
  const P5 = { x: 850, y: 80 };

  const C11 = { x: 950, y: 67 };
  const C12 = { x: 940, y: 440 };
  const P6 = { x: 1200, y: 380 };



// -----------------------------
// Bezier Curve
// -----------------------------

ctx.strokeStyle = gradient;
ctx.lineWidth = 2;

ctx.beginPath();

ctx.moveTo(P0.x, P0.y);

ctx.bezierCurveTo(
    C1.x, C1.y,
    C2.x, C2.y,
    P1.x, P1.y
);

ctx.bezierCurveTo(
    C3.x, C3.y,
    C4.x, C4.y,
    P2.x, P2.y
);
ctx.bezierCurveTo(
    C5.x, C5.y,
    C6.x, C6.y,
    P3.x, P3.y
);
ctx.bezierCurveTo(
    C7.x, C7.y,
    C8.x, C8.y,
    P4.x, P4.y
);
ctx.bezierCurveTo(
    C9.x, C9.y,
    C10.x, C10.y,
    P5.x, P5.y
);
ctx.bezierCurveTo(
    C11.x, C11.y,
    C12.x, C12.y,
    P6.x, P6.y
);

ctx.stroke();
}
drawCurve();

