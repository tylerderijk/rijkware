<template>
  <section class="container">
    <h3 class="hero_text ml11">
      <span class="letters">Experienced Student Developers Ready to Take the Next Step</span>
    </h3>
    <p class="hero_text_small">
      Talented student developers aspiring to acquire practical experience in the realm of software development.
    </p>
    <section class="container steps-container">
      <div class="neo-container">
        <h1>Who</h1>
        <p>
          During the initial two years, students are taught to plan, design, and develop
          applications of varying scales.
        </p>
      </div>
      <div class="neo-container">
        <h1>Why</h1>
        <p>
          The current job landscape predominantly offers full-time positions, posing a challenge for students to amass
          hands-on experience. We want to change that.
        </p>
      </div>
      <div class="neo-container">
        <h1>How</h1>
        <p>
          Discovering projects that provide flexible hours, allowing students to seamlessly integrate them into their
          academic schedules while gaining invaluable field experience.
        </p>
      </div>
    </section>
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
    ;
  },
  methods() {
  }
}
</script>
<style scoped>
section {
  padding: 0;
}

.neo-container {
  margin: 20px 5px 5px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.25);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
//background: #64a9c7; box-shadow: 20px 20px 60px #5f9db8, -20 px -20px 60px #81d5fa;
  padding: 16px;
  transition: ease-in-out 0.2s;
}

.neo-container:hover {
  box-shadow: 14px 14px 48px rgba(245, 245, 245, 0.01),
  -12px -12px 48px rgba(255, 255, 255, 0.1);
}

.neo-container h1 {
  font-size: 3rem;
  color: #FFFFFF;
}

.neo-container p {
  font-size: 2rem;
}

.hero_text {
  margin: 40px 0 20px 20px;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 5rem;
}

.hero_text_small {
  opacity: 0.6;
  font-size: 2rem;
  margin: 10px 20px 20px 20px;
}

.steps-container {
  gap: 3%;
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
}


@media only screen and (max-width: 768px) {
  .hero_text {
    font-size: 2.5rem;
  }

  .hero_text_small {
    font-size: 1rem;
  }

  .steps-container {
    flex-direction: column;
  }

  .neo-container h1 {
    font-size: 1.5rem;
  }

  .steps-container {
    margin-top: 100px;
  }

  .neo-container p {
    font-size: 1rem;
  }
}
</style>