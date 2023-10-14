<template>
  <div class="main-container">

    <div class="hero-container">
      <h1 class="hero-text-large">
        <span class="hero-letters">Experienced Student Developers Ready to Take the Next Step</span>
      </h1>
    </div>
    <div class="hero-container-form">
      <form class="form">
        <p class="title">
          Hire a Student Developer
        </p>
        <p class="message">Let's get in touch to understand your needs. For free.</p>
        <div class="flex">
          <label>
            <input v-model="firstName" maxlength="30" required placeholder type="text" class="input" />
            <span>First Name</span>
          </label>

          <label>
            <input v-model="lastName" maxlength="50" required placeholder type="text" class="input" />
            <span>Last Name</span>
          </label>
        </div>

        <label>
          <input v-model="email" maxlength="50" required placeholder type="email" class="input" />
          <span>Email</span>
        </label>

        <label>
          <textarea v-model="message" maxlength="200" required placeholder class="input message-input"></textarea>
          <span>Message</span>
        </label>
        <small class="message-input-count">{{ characterCount }}/200</small>
        <button class="submit">
          Submit
          <svg
              width="15"
              height="15"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                fill-rule="evenodd"
                d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <p class="visit-contact-page">
          Visit our <a>contact page</a> for other options.
        </p>
      </form>
<!--      <img class="hero-image" src="../assets/img/LaptopRijwkare2.png" alt="" />-->
    </div>
  </div>
    <div class="brand-section">
      <div class="brand-vignette-left"></div>
      <div class="brand-vignette-right"></div>
      <div class="brand-section-icons">
        <small>Student Developers Experienced with:</small>
        <div>
          <div class="slider">
            <div class="slide-track">
              <div class="slide" v-for="(iconClass, index) in brandIcons" :key="index">
                <i class="fa-brands" :class="iconClass"></i>
              </div>
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
    '$route'() {},
  },
  created() {
    this.startBrandAnimation();
  },
  mounted() {
    const textWrapper = document.querySelector('.hero-text-large .hero-letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    // Animation for the entire sentence
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
  computed: {
    characterCount() {
      return this.message.split('').length
    },
  },
  methods: {
    startBrandAnimation() {
      Queue
    }
  }
};
</script>

<style scoped>
.brand-section {
  //margin-top: 80px;
  width: 100vw;
  height: fit-content;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  //margin-top: 20vh;
}

.brand-section small {
  font-family: 'Quicksand', sans-serif;
  opacity: 0.8;
  margin: 10px 0;  color: white;

}

/* Apply vignette effect to the left */
.brand-vignette-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, #000d1a, rgba(34, 106, 187, 0.2), rgba(0, 0, 0, 0) 100%);
  z-index: 80;
}

/* Apply vignette effect to the right */
.brand-vignette-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, #000d1a, rgba(34, 106, 187, 0.2), rgba(0, 0, 0, 0) 100%);
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
  white-space: nowrap;
}

.slider {  text-align: center;

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

.slider .slide-track {
  animation: scroll 40s linear infinite;
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

.title-icon {
  margin-left: 7px;
  margin-top: 2px;
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

.hero-image {
  height: 350px;
  //z-index: 1;
  margin: 50px 50px 50px -150px;
}

.hero-container-form {
  z-index: 1;
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

@keyframes scroll {
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  5% {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(calc(-250px * 7));
  }
}

@media only screen and (max-width: 768px) {
  .hero-container {
    font-size: 2.5rem;
  }

  .step-container h1 {
    font-size: 1.5rem;
  }

  .step-container p {
    font-size: 1rem;
  }

  .slider .slide-track {
    animation: scroll 20s linear infinite;
    width: calc(150px * 14);
  }
}
</style>