const nav = document.getElementById("middle-section");
const ham = document.getElementById("ham-logo")
ham.addEventListener('click', () =>{
    nav.classList.toggle("open");
});

// code for making and rendering the slider
let activeindex = 0;
const cards = document.querySelectorAll('.project-card-container');
const totalcards = cards.length;
const prevBtn = document.getElementById("img-left-arrow");
const nextBtn = document.getElementById("img-right-arrow");
// const cards = document.querySelectorAll("project-card")

function normalizeDelta(raw, n) {
    if (raw > n / 2) raw -= n;
    if (raw < -n / 2) raw += n;
    return raw;
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
  }

  // Button logic
  nextBtn.addEventListener("click", () => {
    activeindex = (activeindex + 1) % totalcards;
    updateSliderUI();
  });

  prevBtn.addEventListener("click", () => {
    activeindex = (activeindex - 1 ) % totalcards;
    updateSliderUI();
  });

  // Initial render
  updateSliderUI();