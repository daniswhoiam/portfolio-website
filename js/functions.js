let cvImageWrapperImages = document.querySelectorAll(
  ".cv-pictures__images img"
);
let cvImageWrapperImagesFirstImage = document.querySelector(
  ".cv-pictures__images .firstImage"
);

let previousBtn = document.querySelector(".previous-btn");
let nextBtn = document.querySelector(".next-btn");

let cvImagesWrapperPagination = document.querySelector(
  ".cv-pictures__pagination"
);

let currentImageCount = 1;

let sliderController;
let createPaginationSpans;

previousBtn.addEventListener("click", previousImage);
nextBtn.addEventListener("click", nextImage);

function previousImage() {
  if (currentImageCount === 1) {
    return false;
  } else {
    currentImageCount--;
    sliderController();
  }
}

function nextImage() {
  if (currentImageCount === cvImageWrapperImages.length) {
    return false;
  } else {
    currentImageCount++;
    sliderController();
  }
}

(function createPaginationSpans() {
  for (let i = 0; i < cvImageWrapperImages.length; i++) {
    let paginationSpan = document.createElement("span");
    cvImagesWrapperPagination.appendChild(paginationSpan);
  }
})();

(sliderController = function () {
  let paginationCircls = document.querySelectorAll(
    ".cv-pictures__pagination span"
  );

  removeAllActive(paginationCircls);

  activeButton();

  let currentImagesMinusOne = currentImageCount - 1;

  paginationCircls[currentImagesMinusOne].classList.add("active");

  let imageWidth = document
    .querySelector(".cv-pictures__images")
    .getBoundingClientRect().width;

  let marginValue = -1 * (imageWidth * currentImagesMinusOne);

  cvImageWrapperImagesFirstImage.style.marginLeft = `${marginValue}px`;
})();

function removeAllActive(targetElement) {
  for (let i = 0; i < targetElement.length; i++) {
    targetElement[i].classList.remove("active");
  }
}

function activeButton() {
  currentImageCount === 1
    ? previousBtn.classList.add("disabled")
    : previousBtn.classList.remove("disabled");

  currentImageCount === cvImageWrapperImages.length
    ? nextBtn.classList.add("disabled")
    : nextBtn.classList.remove("disabled");
}

setInterval(() => {
  if (currentImageCount != cvImageWrapperImages.length) {
    currentImageCount++;
    sliderController();
  } else {
    currentImageCount = 1;
    sliderController();
  }
}, 3000);

window.addEventListener('resize', function () {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  var x = document.getElementsByClassName('navigation-list')[0];
  if (vw >= 800 && x.style.display == "none") {
    x.style.display = "flex";
  } else if (vw < 800 && x.style.display == "flex") {
    x.style.display = "none";
  }
});

function hamburgerMenu() {
  var x = document.getElementsByClassName('navigation-list')[0];
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
