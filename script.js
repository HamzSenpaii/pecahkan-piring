const listImages = [
    "./assets/images/paper_1.jpg",
    "./assets/images/paper_2.jpg",
    "./assets/images/paper_3.jpg",
    "./assets/images/paper_4.jpg"
];
let index = 0;
const images = document.getElementById("images");
function remes() {
  if(index < listImages.length -1) {
    index++;
  }
  images.src = listImages[index];
}