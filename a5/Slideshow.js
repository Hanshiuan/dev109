const myImages = [
  "https://as1.ftcdn.net/v2/jpg/01/20/68/68/1000_F_120686889_nDaqiMH8I5AmT5B0hpuJ14ZasdrrgRAK.jpg",
  "https://as2.ftcdn.net/v2/jpg/06/45/27/81/1000_F_645278147_orAd7BZzFeVzJu1hr14wHj7FPxHmQoMw.jpg",
  "https://as1.ftcdn.net/v2/jpg/02/56/25/56/1000_F_256255660_jGDw9XV8MB8AXfcDRjvi0dXRyf7CbWdB.jpg",
  "https://as2.ftcdn.net/v2/jpg/03/33/41/39/1000_F_333413930_c2GjjOCNl0TtbAQDX6VIlKfcBdHEbya3.jpg",
  "https://as1.ftcdn.net/v2/jpg/07/26/09/48/1000_F_726094808_lUARvgjkxjhQCEiWgnnRg0IMjLqAeLcP.jpg"
];

const captions = [
  "Caught the cat stealing food.",
  "Cat Friends",
  "A freshly bathed cat.",
  "Surprised Cat",
  "Cat with cell phone"
];

let index = 0;
let countdown = 4;
let timerInterval = null;

const img = document.getElementById("slideshow");
const timerDisplay = document.getElementById("timer");
const autoCheckbox = document.getElementById("auto");

function updateImage() {
  img.src = myImages[index];
  img.alt = captions[index];
  caption.textContent = captions[index];
  resetTimer();
}

function next() {
  index = (index + 1) % myImages.length;
  updateImage();
}

function previous() {
  index = (index - 1 + myImages.length) % myImages.length;
  updateImage();
}

document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", previous);

function autoSlide() {
  if (autoCheckbox.checked) {
    countdown--;
    timerDisplay.textContent = countdown;
    if (countdown === 0) {
      next();
    }
  } else {
    resetTimer();
  }
}

function resetTimer() {
  countdown = 4;
  timerDisplay.textContent = countdown;
}

// Start image
updateImage();

// Run interval
timerInterval = setInterval(autoSlide, 1000);
