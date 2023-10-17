<template>
  <div class="main-container">
    <div class="hero-container">
      <h1 class="hero-text-large">
        <span class="hero-letters">Experienced Student Developers Ready to Take the Next Step</span>
      </h1>
    </div>
    <div class="hero-container-form">
      <form class="form">
        <p class="title">Schedule a free Consultation</p>
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
          Send
        </button>
        <!--        <p class="visit-contact-page">-->
        <!--          Visit our <a>contact page</a> for other options.-->
        <!--        </p>-->
      </form>
    </div>
    <h2 class="title-hire-student-developer">
      <i class="fa-solid fa-angles-down" style="color: whitesmoke;"></i>
      Why hire a Student Developer?
      <i class="fa-solid fa-angles-down" style="color: whitesmoke;"></i>
    </h2>
  </div>
  <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="royalblue" fill-opacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,122.7C213.3,85,267,43,320,58.7C373.3,75,427,149,480,160C533.3,171,587,117,640,128C693.3,139,747,213,800,213.3C853.3,213,907,139,960,117.3C1013.3,96,1067,128,1120,149.3C1173.3,171,1227,181,1280,202.7C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
  </svg>
  <div class="blob">
    <!-- This SVG is from https://codepen.io/Ali_Farooq_/pen/gKOJqx -->
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 310 350">
      <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
    </svg>
  </div>


  <section class="section-why">
      <div class="holder-why">
        <h3 class="title-why">7 Reasons Why You Should Choose Rijkware.</h3>
        <p class="text-why">
          Rijkware Student Developers are the smart choice for your projects. They are well-prepared, cost-effective,
          and dedicated to your success:

          <ul>
            <li><span class="li-why">Cost-Effective</span>:<br> High-quality work at a budget-friendly price.</li>
            <li><span class="li-why">Clear Contracts</span>:<br> Transparent agreements before work begins.</li>
            <li><span class="li-why">Experience Growth</span>:<br> Support students in gaining real-world expertise.
            </li>
            <li><span class="li-why">Flexibility</span>:<br> Choose on-site or remote collaboration.</li>
            <li><span class="li-why">Regular Updates</span>:<br> Stay informed with progress reports.</li>
            <li><span class="li-why">Cutting-Edge Skills</span>:<br> Proficiency in the latest technologies.</li>
            <li><span class="li-why">Payment Options</span>:<br> Pay weekly, monthly, or upon project completion. Choose
              hourly rates or project-based billing.</li>
          </ul>
        </p>
      </div>
    <div class="image-why-holder">
      <img class="image-why" src="../assets/img/iphone14prorijkware.png" alt="">
    </div>
  </section>
<!--  <div class="brand-holder">-->
<!--    <div class="brand-section">-->
<!--      <div class="brand-vignette-left"></div>-->
<!--      <div class="brand-vignette-right"></div>-->
<!--      <div class="brand-section-icons">-->
<!--        <div class="section-title">-->
<!--          <h2>Student Developers Experienced with:</h2>-->
<!--        </div>-->
<!--        <div>-->
<!--          <div class="slider">-->
<!--            <div class="slide" v-for="(iconClass, index) in brandIcons" :key="index">-->
<!--              <i class="fa-brands" :class="iconClass"></i>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <small>and <strong>many</strong> more!</small>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <div class="section-title">
    <h2>Frequently Asked Questions</h2>
  </div>
  <section class="section-qna">
    <details class="holder-qna">
      <summary>
        <h3 class="title-why">
          <svg width="28" height="28" fill="royalblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                  clip-rule="evenodd"></path>
          </svg>
          What does Rijkware do?
        </h3>
      </summary>
      <div class="text-why">
        <p>
          Rijkware is a platform connecting businesses or individuals with talented student developers. We facilitate
          collaborations between companies and students studying in IT-related fields. Enabling them to gain real-world
          experience while providing businesses with cost-effective solutions to their software needs.
        </p>
      </div>
    </details>
  </section>
  <section class="section-qna">
    <details class="holder-qna">
      <summary>
        <h3 class="title-why">
          <svg width="28" height="28" fill="royalblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                  clip-rule="evenodd"></path>
          </svg>
          What kind of projects can student developers work on?
        </h3>
      </summary>
      <div class="text-why">
        <p>
          Our student developers are proficient in a wide range of technologies and can work on various projects,
          including web development, mobile app development, data analysis, and more. Students are also capable of
          learning new skills to fit your needs. <br><br>
          <strong>Rijkware prioritizes students academic success. Therefore, we do not accept projects that require
            students to
            work full-time (32-40 hours) unless they provide a flexible schedule.</strong>
        </p>
      </div>
    </details>
  </section>
  <section class="section-qna">
    <details class="holder-qna">
      <summary>
        <h3 class="title-why">
          <svg width="28" height="28" fill="royalblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                  clip-rule="evenodd"></path>
          </svg>
          Do I need to provide guidance to the student developers?
        </h3>
      </summary>
      <div class="text-why">
        <p>
          Why pay more when the result is the same?
        </p>
      </div>
    </details>
  </section>
  <section class="section-qna">
    <details class="holder-qna">
      <summary>
        <h3 class="title-why">
          <svg width="28" height="28" fill="royalblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                  clip-rule="evenodd"></path>
          </svg>
          How do I get started with Rijkware?
        </h3>
      </summary>
      <div class="text-why">
        <p>
          Why pay more when the result is the same?
        </p>
      </div>
    </details>
  </section>
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
details[open] .title-why svg {
  transform: rotate(90deg);
  transition: transform 0.3s ease;
}

details > summary {
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}


.section-qna {
  color: #191919;
  margin: 36px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-title {
  margin-top: 80px;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.section-title h2 {
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: #191919;
}

.holder-qna {
  width: 95%;
  max-width: 1250px;
  padding: 20px;
  background-color: #e8e7ff;
  border-radius: 36px;
}

.section-why {
  margin: 36px 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.holder-why {
  height: 700px;
  display: flex;
  //align-items: center;
  flex-direction: column;
  width: 700px;
  max-width: 1250px;
  //gap: 20px;
  padding: 20px;
  background-color: #cedbff;
  border-radius: 36px;
}

.image-why-holder {
  height: 700px;
  margin: 2rem;
  background-color: #cedbff;
  border-radius: 36px;
  overflow: hidden;
  //background-image: url("../assets/img/iphone14prorijkware.png");
}

.image-why {
  width: 500px;
  padding: 20px;
  -webkit-filter: drop-shadow(0px 22px 22px rgba(34, 34, 34, 0.62));
  filter: drop-shadow(0px 22px 22px rgba(34, 34, 34, 0.62));
}

.title-why {
  font: bold 2rem 'Quicksand', sans-serif;
  color: royalblue;
}

.text-why {
  font-family: Lexend, sans-serif;
  color: #191919;
}

.li-why {
  font-family: 'Quicksand', serif;
  font-weight: bold;
  color: royalblue;
  font-size: 1.2rem;
}

li {
  padding: 6px 0;
  list-style-type: upper-roman;
}

li::marker {
  font-weight: bold;
}


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

.brand-holder {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-section {
}

.brand-section small {
  font-family: 'Quicksand', sans-serif;
  opacity: 0.8;
  margin: 10px 0;
  color: #191919;
}

.brand-section small strong {
  color: #191919;
}

/* Apply vignette effect to the left */
.brand-vignette-leftx {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, royalblue, rgba(65, 105, 225, 0.39), rgba(0, 0, 0, 0) 100%);
  z-index: 80;
}

/* Apply vignette effect to the right */
.brand-vignette-rightx {
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
  //background-image: url("../assets/img/RijkwareLogo20231014.png");
  padding-top: 30px;
  font-size: 80px;
  color: royalblue;
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
  width: 100px;
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
  animation: fade 3s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slider .slide {
  height: 100px;
  width: 250px;
  padding-left: 20px;
}

.slider .slide i {
  width: 200px;
  padding: 36px;
  color: #191919;
  background-color: #bec1ff;
  border-radius: 16px;
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
  background: linear-gradient(#0030b0, #001e9a, #000c73) no-repeat;
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
  padding: 15px 10px 15px 12px;
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


.blob {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  fill: royalblue;
  width: 1500px;
  z-index: -1;
  animation: move 15s ease-in-out infinite;
  transform-origin: 50% 50%;
}

@keyframes move {
  0% {
    transform: scale(1) translate(10px, -30px);
  }
  38% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  40% {
    transform: scale(0.8, 1) translate(80vw, 30vh) rotate(160deg);
  }
  78% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  80% {
    transform: scale(1.3) translate(0vw, 50vh) rotate(-20deg);
  }
  100% {
    transform: scale(1) translate(10px, -30px);
  }
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
  .section-why {
    flex-direction: column;
  }
  .blob {
    display: block;
  }

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