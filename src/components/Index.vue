<template>
  <section class="container">
    <div class="hero">
      <h3 class="hero_text ml11">
        <span class="letters">Experienced student developers ready for their next step</span>
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
<script>
import anime from 'animejs';

export default {
  name: "Index",
  data() {
    return {
      sample: null,
      studentAnimationFound: false,
    }
  },
  watch: {
    '$route'() {

    }
  },
  beforeUpdate() {
  },
  created() {

  },
  mounted() {
    const textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // Animation for the entire sentence
    anime.timeline()
        .add({
          targets: '.ml11 .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.ml11 .line',
          translateX: [0, textWrapper.getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
          delay: 100
        })
        .add({
          targets: '.ml11 .letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1)
        })
        .add({
          targets: '.anime_student',
          opacity: [0, 100],
          easing: "easeOutExpo",
          duration: 600,
          delay: 5000,
          loop: true
        })
    ;

    // Wait for five seconds before running the code
    setTimeout(() => {
      let letters = document.getElementsByClassName('letter');
      console.log(letters);

      for (let i = 0; i < letters.length; i++) {
        letters[i].addEventListener('mouseover', () => {
          letters[i].style['font-family'] = ['Playfair Display', 'sans-serif'];
          letters[i].style.color = 'mediumseagreen';
          setTimeout(() => {
            letters[i].style['font-family'] = ['Lexend', 'sans-serif'];
          }, 3000);

          });
        letters[i].addEventListener('mouseout', () => {
          letters[i].style.color = 'white';
        });
      }
    }, 100);

  },
  methods() {
  }
}
</script>
<style scoped>
section {
  padding: 0;
}

.letter:hover, .letter:active {
  color: red !important;
  font-family: 'Playfair Display', sans-serif !important;
}

.hero {
  margin-top: 15vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  width: fit-content;
  border-radius: 53px;
  background: #191919;
  box-shadow: 18px 18px 36px #131313,
  -18px -18px 36px #1f1f1f;
  padding: 16px;
  transition: ease-in-out 0.2s;
}

.hero:hover {
  box-shadow: 9px 9px 18px #131313,
  -9px -9px 18px #1f1f1f;
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
  padding: 5px;
  font-size: 1em;
  opacity: .1;
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
  }

  .hero_small {
    font-size: 1rem;
  }
}
</style>