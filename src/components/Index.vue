<template>
  <section class="container">
    <div class="hero">
      <h3 class="hero_text">
        Experienced <span class="strikethrough">student</span> developers ready for their next step.
      </h3>
      <div class="hero_small">
        <small>Learn more..</small>
        <div class="svg_wrapper">
          <svg width="32" height="32" fill="mediumseagreen" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12.352 18.848a1.2 1.2 0 0 1 0-1.696L17.503 12l-5.151-5.152a1.2 1.2 0 1 1 1.696-1.696l6 6a1.2 1.2 0 0 1 0 1.696l-6 6a1.2 1.2 0 0 1-1.696 0Z"
                  clip-rule="evenodd"></path>
            <path fill-rule="evenodd"
                  d="M5.152 18.848a1.2 1.2 0 0 1 0-1.696L10.303 12 5.152 6.848a1.2 1.2 0 0 1 1.696-1.696l6 6a1.2 1.2 0 0 1 0 1.696l-6 6a1.2 1.2 0 0 1-1.696 0Z"
                  clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
    <p class="hero_explanation">Rijkware helps student developers to find work that fits in their schedule.</p>
  </section>
</template>
<script setup>
</script>
<style scoped>
section {
}

.hero {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: fit-content;
  border-radius: 53px;
  background: #191919;
  box-shadow: 18px 18px 36px #151515,
  -18px -18px 36px #1d1d1d;
  padding: 16px;
}

.hero_text {
  font-size: 5rem;
  font-family: 'Playfair Display', sans-serif;
}

.hero_small {
  opacity: 0.3;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Lexend', sans-serif;
}

.hero_explanation {
  opacity: .1;
  margin-left: 8px;
}

.strikethrough {
  font-family: 'Quicksand', sans-serif;
  color: white;
  text-decoration: underline wavy mediumseagreen;
  text-underline-offset: 8px;
}

.svg_wrapper {
  transition: ease-in-out 0.3s;
}

.hero_small:hover .svg_wrapper {
  transform: translateX(8px);
}

@media only screen and (max-width: 768px) {
  .hero_text {
    font-size: 3.5rem;
  //margin-left: 10px;
  }

  .hero_small {
    font-size: 1rem;
  }
}
</style>
