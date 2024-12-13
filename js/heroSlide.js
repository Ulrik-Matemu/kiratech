let slideIndex = 0;
let slideInterval; // Store interval ID
showSlides(); // Call to start the slideshow automatically

// Manual navigation (Next or Previous button)
function plusSlides(n) {
    slideIndex += n;

    // Ensure the slideIndex wraps correctly
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex > slides.length) {
        slideIndex = 1;
    } else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    showSlides(); // Update the slide
    resetInterval(); // Reset the interval to prevent overlap
}


// Automatically show the slides every 4 seconds
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex for automatic transition
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
}

// Start the slideshow interval
function startInterval() {
    slideInterval = setInterval(showSlides, 4000);
}

// Reset and restart the interval when the user manually changes slides
function resetInterval() {
    clearInterval(slideInterval);
    startInterval(); // Restart automatic slideshow after manual changes
}

// Initialize the interval when the script runs
startInterval();