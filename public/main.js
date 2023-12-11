// menu open and close

const mobileMenu = document.getElementById("mobile-nav");
const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

// open menu
function openMenu() {
  mobileMenu.style.display = "flex";
  openButton.style.display = "none";
  closeButton.style.display = "block";
}
function closeMenu() {
  mobileMenu.style.display = "none";
  openButton.style.display = "block";
  closeButton.style.display = "none";
}

// open modal code
function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "flex";
}
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// open modal code
function openModal1() {
  const modal1 = document.getElementById("modal1");
  modal1.style.display = "flex";
}
function closeModal1() {
  const modal1 = document.getElementById("modal1");
  modal1.style.display = "none";
}


//  Video popup  code
var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}
