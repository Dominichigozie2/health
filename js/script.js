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