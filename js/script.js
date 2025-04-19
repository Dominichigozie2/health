const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000, // Set autoplay delay in milliseconds
  },
  on: {
    slideChangeTransitionStart: function() {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const slideContent = activeSlide.querySelector('.slide-content');

      slideContent.style.animationPlayState = 'paused';
      requestAnimationFrame(() => {
        slideContent.style.animationPlayState = 'running';
      });
    }
  },
  // ... Other Swiper options
});


function toggleDropdown() {
  var dropDown = document.querySelector(".dropdown1");
  dropDown.style.display = dropDown.style.display === "block" ? "none" : "block";
}


const menuBar = document.querySelector("#menubar");
menuBar.addEventListener("click", () => {
  const nav = document.querySelector(".sidebar");
  nav.classList.toggle("show");
});