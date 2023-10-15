<template>
  <div class="main-container">
    <div class="hero-container">
      <h1 class="hero-text-large">
        <span class="hero-letters">Experienced Student Developers Ready to Take the Next Step</span>
      </h1>
    </div>
    <div class="hero-container-form">
      <form class="form">
        <p class="title">Hire a Student Developer</p>
        <p class="message">Let's get in touch to understand your needs. For free.</p>
        <div class="flex">
          <label>
            <input v-model="firstName" maxlength="30" required placeholder="First Name" type="text" class="input"/>
          </label>
          <label>
            <input v-model="lastName" maxlength="50" required placeholder="Last Name" type="text" class="input"/>
          </label>
        </div>
        <label>
          <input v-model="email" maxlength="50" required placeholder="Email" type="email" class="input"/>
        </label>
        <label>
          <textarea v-model="message" maxlength="200" required placeholder="Message"
                    class="input message-input"></textarea>
        </label>
        <small class="message-input-count">{{ this.message.length }}/200</small>
        <button class="submit">
          Submit
          <svg
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <!-- Your SVG path -->
          </svg>
        </button>
        <p class="visit-contact-page">
          Visit our <a>contact page</a> for other options.
        </p>
      </form>
    </div>
    <h2 class="title-hire-student-developer">
      <i class="fa-solid fa-angles-down"></i>
      Scroll down to find out why.
      <i class="fa-solid fa-angles-down"></i>
    </h2>

  </div>
  <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="royalblue" fill-opacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,122.7C213.3,85,267,43,320,58.7C373.3,75,427,149,480,160C533.3,171,587,117,640,128C693.3,139,747,213,800,213.3C853.3,213,907,139,960,117.3C1013.3,96,1067,128,1120,149.3C1173.3,171,1227,181,1280,202.7C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
  </svg>

  <div class="brand-section">
    <div class="brand-vignette-left"></div>
    <div class="brand-vignette-right"></div>
    <div class="brand-section-icons">
      <small>Student Developers Experienced with:</small>
      <div>
        <div class="slider">
          <div class="slide" v-for="(iconClass, index) in brandIcons" :key="index">
            <i class="fa-brands" :class="iconClass"></i>
          </div>
        </div>
      </div>
      <small>and <strong>many</strong> more!</small>
    </div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "HomePage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      brandIcons: [
        "fa-php",
        "fa-html5",
        "fa-css3",
        "fa-js",
        "fa-c",
        "fa-java",
        "fa-python",
        "fa-react",
        "fa-vuejs",
        "fa-angular",
        "fa-figma",
        "fa-node-js",
        "fa-laravel",
        "fa-android",
        "fa-apple",
      ],
    };
  },
  watch: {
    '$route'() {
    },
  },
  created() {
    this.startBrandAnimation();
  },
  mounted() {
    const textWrapper = document.querySelector('.hero-text-large .hero-letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline()
        .add({
          targets: '.hero-text-large .line',
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700
        })
        .add({
          targets: '.hero-text-large .line',
          translateX: [0, textWrapper.getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
          duration: 700,
        })
        .add({
          targets: '.hero-text-large .letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 34 * (i + 1)
        });
  },
  computed: {},
  methods: {
    startBrandAnimation() {
      setInterval(() => {
        const firstElement = this.brandIcons.shift();
        this.brandIcons.push(firstElement);
      }, 3000);
    }
  }
};
</script>
<style scoped>
.title-hire-student-developer {
  z-index: 10;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  background-color: royalblue;
}

.hero-waves {
  z-index: 2;
  position: absolute;
  bottom: 0;
//-webkit-filter: drop-shadow(-3px -3px 0 whitesmoke); //filter: drop-shadow(-3px -3px 0 whitesmoke);
}


.brand-section {
//margin-top: 80px; width: 100vw; height: fit-content; background-color: black; display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  background-color: royalblue;
//margin-top: 20vh;
}

.brand-section small {
  font-family: 'Quicksand', sans-serif;
  opacity: 0.8;
  margin: 10px 0;
  color: white;

}

/* Apply vignette effect to the left */
.brand-vignette-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, royalblue, rgba(65, 105, 225, 0.39), rgba(0, 0, 0, 0) 100%);
  z-index: 80;
}

/* Apply vignette effect to the right */
.brand-vignette-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, royalblue, rgba(65, 105, 225, 0.39), rgba(0, 0, 0, 0) 100%);
  z-index: 80;
}

/* Apply animation to all text elements */
.brand-section-icons {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.fa-brands {
  padding-top: 30px;
  font-size: 80px;
  margin-right: 20px;
}

.slider {
  text-align: center;
  display: flex;
  justify-content: center;
  height: 150px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100vw;
}

.slider::before,
.slider::after {
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slider {
  animation: fade 3s ease-in-out infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider .slide {
  height: 100px;
  width: 250px;
  padding-left: 20px;
}

section {
  padding: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
}

.hero-container {
  width: 80vw;
  max-width: 1000px;
  padding-bottom: 20px;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-letters {
  font-size: 4rem;
}

.hero-text-large {
  z-index: 10;
}


button {
  --primary-color: rgba(255, 255, 255, 0.5);
  --hovered-color: rgba(255, 255, 255, 0.56);
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;
}

button p::before {
  position: absolute;
  inset: 0;
  color: var(--hovered-color);
  overflow: hidden;
  transition: 0.3s ease-out;
}

button:hover::after {
  width: 100%;
}

button:hover p::before {
  width: 100%;
}

.form {
  border: rgba(0, 0, 0, 0.05) 8px solid;
  z-index: 3;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90vw;
  max-width: 450px;
  background-color: #fff;
  padding: 20px;
  border-radius: 36px;
  position: relative;
  transition: ease-in-out 100ms;
}

.form:hover, .form:focus-within {
  transform: scale(1.01);
}

.title {
  text-align: left;
  font-family: 'Lexend', sans-serif;
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}

.title::before, .title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0;
  background-color: royalblue;
}

.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}


.message, .visit-contact-page {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.visit-contact-page {
  text-align: center;
}

.visit-contact-page a {
  color: royalblue;
}

.visit-contact-page a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  color: black;
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  opacity: 0;
}

.submit {
  border: none;
  outline: none;
  background-color: royalblue;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transition: ease-in-out 0.3s;
}

.submit:hover {
  background-color: rgb(56, 90, 194);
}

.message-input-count {
  gap: 0;
  display: flex;
  justify-content: end;
  color: gray;
}

.hero-container-form {
  z-index: 3;
  display: flex;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media only screen and (max-width: 768px) {
  .hero-waves {
    width: 200vw;
    margin-left: -120px;
  }

  .hero-container {
    font-size: 2.5rem;
  }

  .title {
    font-size: 1.5rem;
  }

  .form {
    width: 95vw;
  }

  .hero-letters {
    font-size: 2rem;
  }

  .step-container h1 {
    font-size: 1.5rem;
  }

  .step-container p {
    font-size: 1rem;
  }

  .slider .slide-track {
    animation: fade 20s linear infinite;
    width: calc(150px * 14);
  }
}
</style>