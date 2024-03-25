let imageIndex = 0;
let imageLinks = ["rabbit.jpg", "panda.jpg", "bird.jpg"];
let image = document.querySelector(".image");

document.addEventListener("keyup", keyup);

function prevImage() {
  if (imageIndex > 0) {
    imageIndex--;
    image.src = imageLinks[imageIndex];
  }
}

function nextImage() {
  if (imageIndex < imageLinks.length - 1) {
    imageIndex++;
    image.src = imageLinks[imageIndex];
  }
}

function keyup(event) {
  console.log(event.key);
  if (event.key === "ArrowLeft") {
    prevImage(); //if (event.key === "ArrowLeft")
  } else if (event.key === "ArrowRight") {
    nextImage(); //if (event.key === "ArrowRight")
  }
}

// let prevButton = document.querySelector(".prev-button");
// let nextButton = document.querySelector(".next-button");

// prevButton.addEventListener("click", prevImage);
// nextButton.addEventListener("click", nextImage);
