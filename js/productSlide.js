let productSlideIndex = 0;
let productInterval;
showProductSlides();

function plusProductSlides(n) {
  productSlideIndex += n;

  let productSlides = document.getElementsByClassName("product-slide1");
  if (productSlideIndex > productSlides.length) {
    productSlideIndex = 1;
  } else if (productSlideIndex < 1) {
    productSlideIndex = productSlides.length;
  }

  showProductSlides();
  resetProductInterval();
}

function currentProductSlide(n) {
  productSlideIndex = n;
  showProductSlides();
  resetProductInterval();
}

function showProductSlides() {
  let productSlides = document.getElementsByClassName("product-slide1");

  for (let i = 0; i < productSlides.length; i++) {
    productSlides[i].style.display = "none";
  }

  productSlideIndex++;
  if (productSlideIndex > productSlides.length) {
    productSlideIndex = 1;
  }

  productSlides[productSlideIndex - 1].style.display = "block";
}

function startProductInterval() {
  productInterval  = setInterval(showProductSlides, 5000);
}

function resetProductInterval() {
  clearInterval(productInterval);
  startProductInterval();
}

startProductInterval();