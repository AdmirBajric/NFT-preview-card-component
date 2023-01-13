const imgContainer = document.querySelector("#card-img");
const overlay = document.querySelector(".overlay");
const eye = document.querySelector(".eye");

imgContainer.addEventListener("mouseover", (e) => {
  if (window.innerWidth > 600) {
    overlay.style.opacity = 0.5;
    eye.style.opacity = 0.5;
  }
});

imgContainer.addEventListener("mouseout", (e) => {
  overlay.style.opacity = 0;
  eye.style.opacity = 0;
});
