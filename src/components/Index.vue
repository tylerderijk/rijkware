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
            hourly rates or project-based billing.
          </li>
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

  <section class="section-student">
    <div class="holder-student">
      <h2 class="text-student">Are you an IT Student looking for work?</h2>
      <span>Rijkware helps you find positions/projects which you can combine with your studies. </span>
      <button class="btn-student">Contact us</button>
    </div>
  </section>


  <section class="section-steps">
    <div class="counters-steps">
      <div class="container">
        <div class="radio-tile-group">
          <div class="input-container">
            <input checked id="step-one" class="radio-button" type="radio" name="radio" @click="changeStep(1)">
            <div class="radio-tile">
              <div class="icon step-one-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.4 6a2.4 2.4 0 0 1 2.4-2.4h8.4A2.4 2.4 0 0 1 15.6 6v4.8a2.4 2.4 0 0 1-2.4 2.4h-2.4l-3.6 3.6v-3.6H4.8a2.4 2.4 0 0 1-2.4-2.4V6Z"></path>
                  <path
                      d="M18 8.4v2.4a4.8 4.8 0 0 1-4.8 4.8h-1.406l-2.12 2.12c.336.18.72.28 1.126.28h2.4l3.6 3.6V18h2.4a2.4 2.4 0 0 0 2.4-2.4v-4.8a2.4 2.4 0 0 0-2.4-2.4H18Z"></path>
                </svg>
              </div>
              <label for="step-one" class="radio-tile-label">1</label>
            </div>
          </div>

          <div class="input-container">
            <input id="step-two" class="radio-button" type="radio" name="radio" @click="changeStep(2)">
            <div class="radio-tile">
              <div class="icon step-two-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M4.8 4.8a2.4 2.4 0 0 1 2.4-2.4h5.503a2.4 2.4 0 0 1 1.697.703L18.497 7.2a2.4 2.4 0 0 1 .703 1.697V19.2a2.4 2.4 0 0 1-2.4 2.4H7.2a2.4 2.4 0 0 1-2.4-2.4V4.8ZM7.2 12a1.2 1.2 0 0 1 1.2-1.2h7.2a1.2 1.2 0 0 1 0 2.4H8.4A1.2 1.2 0 0 1 7.2 12Zm1.2 3.6a1.2 1.2 0 0 0 0 2.4h7.2a1.2 1.2 0 1 0 0-2.4H8.4Z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <label for="step-two" class="radio-tile-label">2</label>
            </div>
          </div>

          <div class="input-container">
            <input id="step-three" class="radio-button" type="radio" name="radio" @click="changeStep(3)">
            <div class="radio-tile">
              <div class="icon step-three-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M14.78 3.661a1.2 1.2 0 0 1 .759 1.518l-4.8 14.4a1.2 1.2 0 0 1-2.278-.758l4.8-14.4a1.201 1.201 0 0 1 1.518-.76Zm-7.932 3.89a1.2 1.2 0 0 1 0 1.697L4.097 12l2.751 2.752a1.2 1.2 0 1 1-1.696 1.696l-3.6-3.6a1.2 1.2 0 0 1 0-1.696l3.6-3.6a1.2 1.2 0 0 1 1.696 0Zm10.304 0a1.2 1.2 0 0 1 1.696 0l3.6 3.6a1.2 1.2 0 0 1 0 1.697l-3.6 3.6a1.2 1.2 0 1 1-1.696-1.696L19.903 12l-2.751-2.752a1.2 1.2 0 0 1 0-1.696Z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <label for="step-three" class="radio-tile-label">3</label>
            </div>
          </div>

          <div class="input-container">
            <input id="step-four" class="radio-button" type="radio" name="radio" @click="changeStep(4)">
            <div class="radio-tile">
              <div class="icon step-four-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8 2.4a1.2 1.2 0 1 0 0 2.4h2.4a1.2 1.2 0 1 0 0-2.4h-2.4Z"></path>
                  <path fill-rule="evenodd"
                        d="M4.8 6a2.4 2.4 0 0 1 2.4-2.4 3.6 3.6 0 0 0 3.6 3.6h2.4a3.6 3.6 0 0 0 3.6-3.6A2.4 2.4 0 0 1 19.2 6v13.2a2.4 2.4 0 0 1-2.4 2.4H7.2a2.4 2.4 0 0 1-2.4-2.4V6Zm11.648 6.848a1.2 1.2 0 0 0-1.696-1.696L10.8 15.103l-1.552-1.551a1.2 1.2 0 0 0-1.696 1.696l2.4 2.4a1.2 1.2 0 0 0 1.696 0l4.8-4.8Z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <label for="step-four" class="radio-tile-label">4</label>
            </div>
          </div>

          <div class="input-container">
            <input id="step-five" class="radio-button" type="radio" name="radio" @click="changeStep(5)">
            <div class="radio-tile">
              <div class="icon step-five-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.4 7.93a6.003 6.003 0 0 0 4.833 5.885c.077-.86.298-1.7.653-2.487C6.834 10.972 6.159 10.166 6 9.02h-.6v-.51h.56v-.52c0-.056 0-.112.004-.163H5.4v-.512h.614c.27-1.498 1.442-2.386 3.204-2.386.379 0 .708.037.982.102v.88a4.153 4.153 0 0 0-.978-.099c-1.102 0-1.845.56-2.08 1.503h2.3v.512H7.066c-.004.055-.004.117-.004.177v.506h2.38v.512H7.116c.142.723.562 1.236 1.206 1.475a7.8 7.8 0 0 1 5.964-3.735A6.002 6.002 0 0 0 2.4 7.929Zm19.2 6.6a6.6 6.6 0 1 1-13.2 0 6.6 6.6 0 0 1 13.2 0Zm-9.3 1.586c.083 1.002.896 1.782 2.357 1.874v.74h.648v-.745c1.51-.103 2.395-.888 2.395-2.028 0-1.038-.675-1.572-1.884-1.848l-.51-.12v-2.011c.647.072 1.06.416 1.158.894h1.138c-.084-.965-.935-1.72-2.297-1.802v-.74h-.648v.754c-1.291.124-2.17.878-2.17 1.946 0 .945.653 1.546 1.74 1.792l.43.102v2.136c-.665-.096-1.104-.451-1.203-.944H12.3Zm2.352-2.274c-.638-.144-.984-.437-.984-.879 0-.492.373-.863.99-.97v1.847h-.007l.001.002Zm.747 1.252c.774.174 1.131.456 1.131.956 0 .568-.444.96-1.224 1.032v-2.01l.093.022Z"></path>
                </svg>
              </div>
              <label for="step-five" class="radio-tile-label">5</label>
            </div>
          </div>

          <div class="input-container">
            <input id="step-six" class="radio-button" type="radio" name="radio" @click="changeStep(6)">
            <div class="radio-tile">
              <div class="icon step-six-icon">
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                        d="M7.52 4.146a3.68 3.68 0 0 0 2.094-.868 3.68 3.68 0 0 1 4.772 0 3.68 3.68 0 0 0 2.094.868 3.68 3.68 0 0 1 3.374 3.374 3.67 3.67 0 0 0 .868 2.094 3.68 3.68 0 0 1 0 4.772 3.679 3.679 0 0 0-.868 2.094 3.68 3.68 0 0 1-3.374 3.374 3.679 3.679 0 0 0-2.094.868 3.68 3.68 0 0 1-4.772 0 3.679 3.679 0 0 0-2.094-.868 3.68 3.68 0 0 1-3.374-3.374 3.68 3.68 0 0 0-.868-2.094 3.68 3.68 0 0 1 0-4.772 3.68 3.68 0 0 0 .868-2.094A3.68 3.68 0 0 1 7.52 4.146Zm8.928 6.302a1.2 1.2 0 0 0-1.696-1.696L10.8 12.703l-1.552-1.551a1.2 1.2 0 0 0-1.696 1.696l2.4 2.4a1.2 1.2 0 0 0 1.696 0l4.8-4.8Z"
                        clip-rule="evenodd"></path>
                </svg>
              </div>
              <label for="step-six" class="radio-tile-label">6</label>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="holder-steps">
      <div v-if="!this.currentStep['isOnRightSide']" v-html="this.currentStep['svg']"></div>
      <div class="text-steps">
        <h3>{{ this.currentStep["title"] }}</h3>
        <p>{{ this.currentStep["text"] }}</p>
      </div>
      <div v-if="this.currentStep['isOnRightSide']" v-html="this.currentStep['svg']"></div>

      <!--      <svg height="348" width="348" fill="#4662ab" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
      <!--        <path-->
      <!--            d="M2.4 6a2.4 2.4 0 0 1 2.4-2.4h8.4A2.4 2.4 0 0 1 15.6 6v4.8a2.4 2.4 0 0 1-2.4 2.4h-2.4l-3.6 3.6v-3.6H4.8a2.4 2.4 0 0 1-2.4-2.4V6Z"></path>-->
      <!--        <path-->
      <!--            d="M18 8.4v2.4a4.8 4.8 0 0 1-4.8 4.8h-1.406l-2.12 2.12c.336.18.72.28 1.126.28h2.4l3.6 3.6V18h2.4a2.4 2.4 0 0 0 2.4-2.4v-4.8a2.4 2.4 0 0 0-2.4-2.4H18Z"></path>-->
      <!--      </svg>-->
    </div>

  </section>


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
  <div class="section-title">
    <h2>Contact & Service</h2>
  </div>
  <section class="section-contact">
    <div class="holder-contact">
      <div class="card-contact card-contact-form">
        <div>
          <i class="fa-solid fa-address-book"></i>
          <h4>Contact us</h4>
        </div>
          <strong style="position: absolute; color: royalblue; opacity: 0.4; margin-top: 16px;">FASTEST!</strong>
        <p>Use this form </p>
      </div>
      <div class="card-contact">
        <div>
          <i class="fa-solid fa-envelope"></i>
          <h4>Email us</h4>
        </div>
        <p>support@rijkwa.re</p>
      </div>
      <div class="card-contact">
        <div>
          <i class="fa-solid fa-phone"></i>
          <h4>Call us</h4>
        </div>
        <p>+31 6 420 68 928</p>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';
import steps from "../assets/json/steps.js";

export default {
  name: "HomePage",
  data() {
    return {
      currentStep: {},
      allSteps: [],
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
    steps.forEach((step) => {
      this.allSteps.push(step);
    });

    this.currentStep = this.allSteps[0];

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
    },

    changeStep(step) {
      switch (step) {
        case 1:
          this.currentStep = this.allSteps[0];
          break;
        case 2:
          this.currentStep = this.allSteps[1];
          break;
        case 3:
          this.currentStep = this.allSteps[2];
          break;
        case 4:
          this.currentStep = this.allSteps[3];
          break;
        case 5:
          this.currentStep = this.allSteps[4];
          break;
        case 6:
          this.currentStep = this.allSteps[5];
          break;
      }
    }
  }
};
</script>
<style scoped>
.card-contact p {
  user-select: none;
}

.card-contact i {
  font-size: 64px;
}

.card-contact {
  width: 300px;
  height: 95%;
  background-color: #fff;
  border-radius: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.card-contact-form {
  outline: #bec1ff solid 4px;
  //background-color: ;
}

.holder-contact {
  width: 1200px;
  padding: 36px;
  border-radius: 36px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.section-contact {
  margin: 36px 0;
  width: 100vw;
  height: 300px;
  display: flex;
  justify-content: center;
}

.text-steps {
  color: royalblue;
  width: 55%;
}

.text-steps h3 {
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
}

.text-steps p {
  font-family: 'Lexend', sans-serif;
}

.holder-steps svg {
  color: whitesmoke;
}

.holder-steps {
  padding: 20px;
  height: 400px;
  width: 800px;
  background-color: #CDDBFF;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.section-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100vw;
  height: 550px;
  margin-top: 36px;
}


.radio-tile-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.radio-tile-group .input-container {
  position: relative;
  height: 80px;
  width: 80px;
  margin: 0.5rem;
}

.radio-tile-group .input-container .radio-button {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  cursor: pointer;
}

.radio-tile-group .input-container .radio-tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 2px solid royalblue;
  border-radius: 16px;
  padding: 1rem;
  transition: transform 300ms ease;
}

.radio-tile-group .input-container .icon svg {
  fill: royalblue;
  width: 2rem;
  height: 2rem;
}

.radio-tile-group .input-container .radio-tile-label {
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: royalblue;
}

.radio-tile-group .input-container .radio-button:checked + .radio-tile {
  background-color: royalblue;
  border: 2px solid royalblue;
  color: white;
  transform: scale(1.1, 1.1);
}

.radio-tile-group .input-container .radio-button:checked + .radio-tile .icon svg {
  fill: white;
  background-color: royalblue;
}

.radio-tile-group .input-container .radio-button:checked + .radio-tile .radio-tile-label {
  color: white;
  background-color: royalblue;
}


.section-student {
  background-size: 400% 400%;
  -webkit-animation: Gradient 15s ease infinite;
  -moz-animation: Gradient 15s ease infinite;
  animation: Gradient 15s ease infinite;
  overflow: hidden;
  position: relative;
}

.section-student::before,
.section-student::after {
  content: "";
  width: 70vmax;
  height: 70vmax;
  position: absolute;
  background: rgba(255, 255, 255, 0.07);
  left: -20vmin;
  top: -20vmin;
  animation: morph 15s linear infinite alternate, spin 20s linear infinite;
  z-index: 1;
  will-change: border-radius, transform;
  transform-origin: 55% 55%;
  pointer-events: none;
}

.section-student::after {
  width: 70vmin;
  height: 70vmin;
  left: auto;
  right: -10vmin;
  top: auto;
  bottom: 0;
  animation: morph 10s linear infinite alternate, spin 26s linear infinite reverse;
  transform-origin: 20% 20%;
}

@-webkit-keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@-moz-keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@keyframes Gradient {
  0% {
    background-position: 0 50%
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%
  }
}

@keyframes morph {
  0% {
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
  }
  100% {
    border-radius: 40% 60%;
  }
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}


.section-student {
  background: linear-gradient(#4e75e8, #224ccb);
  width: 100vw;
  height: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.holder-student {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text-student {
  font-family: 'VT323', sans-serif;
  font-size: xxx-large;
//letter-spacing: 1px; font-weight: bold;
}

.holder-student span {
  color: white;
  margin-bottom: 16px;
  opacity: 0.4;
  font-family: 'VT323', sans-serif;
  font-size: large;
}

.btn-student {
  background-color: white;
  border: none;
  border-radius: 36px;
  padding: 10px 20px;
  font-family: 'VT323', sans-serif;
  font-size: x-large;
  font-weight: bold;
  color: royalblue;
  cursor: pointer;
  transition: ease-in-out 200ms;
  box-shadow: #191919 0 4px 2px;
}

.btn-student:hover {
  box-shadow: #191919 0 2px 2px;
  transform: scale(0.97);
  background-color: royalblue;
  color: white;
}

.btn-student:active {
  box-shadow: #191919 0 0 0;
  transform: scale(0.90);
  background-color: #001157;
  color: white;
}


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
//align-items: center; flex-direction: column; width: 700px; max-width: 1250px; //gap: 20px; padding: 20px; background-color: #cedbff; border-radius: 36px;
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
//background-image: url("../assets/img/RijkwareLogo20231014.png"); padding-top: 30px; font-size: 80px; color: royalblue; margin-right: 20px;
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