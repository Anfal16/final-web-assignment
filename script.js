document.querySelector('.nav-toggle').addEventListener('click', function() {
document.querySelector('.navbar').classList.toggle('active');
});

const galleryImages = [
  "henna1.jpg",
  "henna2.jpg",
  "henna3.jpg",
  "henna4.jpg",
  "henna5.jpg",
  "henna6.jpg",
  "henna7.jpg",
  "henna8.jpg",
  "henna9.jpg",
  "henna10.jpg",
  "henna11.jpg",
  "henna12.jpg",
  "henna13.jpg",
  "henna14.jpg",
  "henna15.jpg",
  "henna16.jpg",
  "henna17.jpg",
  "henna18.jpg",
  "henna19.jpg",
  "henna20.jpg",
];

const galleryContainer = document.getElementById("gallery");

galleryImages.forEach((fileName, index) => {
    const div = document.createElement("div");
    div.classList.add("gallery-item");

    const img = document.createElement("img");
    img.src = fileName; // uses local image
    img.alt = `Henna Design ${index + 1}`;

    div.appendChild(img);
    galleryContainer.appendChild(div);
});