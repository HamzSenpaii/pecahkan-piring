const listPlate = [
    "./assets/images/plate-1.jpg",
    "./assets/images/plate-2.jpg",
    "./assets/images/plate-3.jpg",
    "./assets/images/plate-4.jpg"
];
let index = 0;
const images = document.getElementById("images");
function pecahkan() {
    if (index < listPlate.length - 1) {
        index++;
    }
    images.src = listPlate[index];
}
