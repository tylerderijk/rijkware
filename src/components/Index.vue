<template>
  <div class="main-container" id="form">
    <div class="hero-container">
      <h1 class="hero-text-large">
        <span class="hero-letters">Experienced Student Developers Ready to Take the Next Step</span>
      </h1>
    </div>
    <div class="hero-container-form">
      <form class="form">
        <div class="loader-form" ref="loader" v-if="this.sendingFormMsg">
          <div class="spinner-form"></div>
        </div>
        <div class="radio-inputs">
          <label>
            <input :checked="this.formType[0]" class="radio-input" type="radio" name="engine" @click="changeForm(0)">
            <span class="radio-tile-form">
					<span class="radio-icon">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd"
        d="M7.2 7.2V6a3.6 3.6 0 0 1 3.6-3.6h2.4A3.6 3.6 0 0 1 16.8 6v1.2h2.4a2.4 2.4 0 0 1 2.4 2.4v4.284A27.542 27.542 0 0 1 12 15.6a27.542 27.542 0 0 1-9.6-1.716V9.6a2.4 2.4 0 0 1 2.4-2.4h2.4ZM9.6 6a1.2 1.2 0 0 1 1.2-1.2h2.4A1.2 1.2 0 0 1 14.4 6v1.2H9.6V6Zm1.2 6a1.2 1.2 0 0 1 1.2-1.2h.012a1.2 1.2 0 1 1 0 2.4H12a1.2 1.2 0 0 1-1.2-1.2Z"
        clip-rule="evenodd"></path>
  <path
      d="M2.4 16.43v2.77a2.4 2.4 0 0 0 2.4 2.4h14.4a2.4 2.4 0 0 0 2.4-2.4v-2.77A29.97 29.97 0 0 1 12 18c-3.355 0-6.584-.552-9.6-1.57Z"></path>
</svg>
					</span>
					<span class="radio-label">Business</span>
				</span>
          </label>
          <label>
            <input :checked="this.formType[1]" class="radio-input" type="radio" name="engine" @click="changeForm(1)">
            <span class="radio-tile-form">
				<span class="radio-icon">
          <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path
      d="M12.473 2.496a1.2 1.2 0 0 0-.946 0l-8.4 3.6a1.2 1.2 0 0 0 0 2.208L6.3 9.661c.118-.133.264-.238.427-.308l4.8-2.057a1.2 1.2 0 1 1 .946 2.206L9.2 10.906l2.328.997a1.2 1.2 0 0 0 .945 0l8.4-3.6a1.2 1.2 0 0 0 0-2.206l-8.4-3.6v-.001Zm-8.501 8.78L6 12.144v4.922a10.76 10.76 0 0 0-1.26-.208 1.2 1.2 0 0 1-1.068-1.068 13.338 13.338 0 0 1 .3-4.515v.001Zm7.188 8.612a10.831 10.831 0 0 0-2.76-1.966v-4.748l2.182.936a3.6 3.6 0 0 0 2.836 0l6.61-2.834c.358 1.477.46 3.004.3 4.515a1.2 1.2 0 0 1-1.068 1.068 10.76 10.76 0 0 0-6.42 3.029 1.2 1.2 0 0 1-1.68 0ZM7.2 21.6a1.2 1.2 0 0 0 1.2-1.2v-2.478a10.72 10.72 0 0 0-2.4-.854V20.4a1.2 1.2 0 0 0 1.2 1.2Z"></path>
</svg>
				</span>
				<span class="radio-label">Student</span>
			</span>
          </label>
          <label>
            <input :checked="this.formType[2]" class="radio-input" type="radio" name="engine" @click="changeForm(2)">
            <span class="radio-tile-form">
					<span class="radio-icon">
            <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd"
        d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0Zm-8.4-4.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Zm-2.4 3.6a1.2 1.2 0 0 0 0 2.4v3.6A1.2 1.2 0 0 0 12 18h1.2a1.2 1.2 0 1 0 0-2.4V12a1.2 1.2 0 0 0-1.2-1.2h-1.2Z"
        clip-rule="evenodd"></path>
</svg>
					</span>
					<span class="radio-label">Other</span>
				</span>
          </label>
        </div>
        <form-business v-if="this.formType[0]"
                       :results="this.businessFormResults"
                       @submit="submitForm(this.businessFormResults)"/>
        <form-student v-if="this.formType[1]"
                      :results="this.studentFormResults"
                      @submit="submitForm(this.businessFormResults)"/>
        <form-other v-if="this.formType[2]"
                    :results="this.otherFormResults"
                    @submit="submitForm(this.businessFormResults)"/>
        <button class="submit" @click="this.submitForm()">
          Send
        </button>
        <p class="visit-contact-page">
          Other options available at the <a href="#contactService" style="text-underline-offset: 4px;">Contact &
          Service</a> section.
        </p>
      </form>
    </div>
    <svg class="title-hire-student-developer" width="75" height="75" fill="whitesmoke" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg">
      <path
          d="M12.24 6a.6.6 0 0 1 .6.6V9a.6.6 0 1 1-1.2 0V6.6a.6.6 0 0 1 .6-.6Zm4.8 9.6a4.8 4.8 0 1 1-9.6 0V8.4a4.8 4.8 0 1 1 9.6 0v7.2Zm-4.8-13.2a6 6 0 0 0-6 6v7.2a6 6 0 1 0 12 0V8.4a6 6 0 0 0-6-6Z"></path>
    </svg>
  </div>
  <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path fill="royalblue" fill-opacity="1"
          d="M0,224L26.7,208C53.3,192,107,160,160,122.7C213.3,85,267,43,320,58.7C373.3,75,427,149,480,160C533.3,171,587,117,640,128C693.3,139,747,213,800,213.3C853.3,213,907,139,960,117.3C1013.3,96,1067,128,1120,149.3C1173.3,171,1227,181,1280,202.7C1333.3,224,1387,256,1413,272L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
  </svg>
  <section class="section-why fade-in-section">
    <div class="image-why-holder">
      <img class="image-why" src="../assets/img/iphone14prorijkware.png" alt="">
    </div>
    <div class="reason-section">

      <div class="holder-why">
        <h3 class="title-why">7 Reasons Why You Should Choose Rijkware.</h3>
      </div>
      <ul>
        <li class="reason-why" v-for="reason in this.allReasons"><span class="li-why">{{ reason.title }}</span><br>
          {{ reason.text }}
        </li>
      </ul>
    </div>

  </section>
  <section class="section-student">
    <div class="holder-student">
      <h2 class="text-student">Are you an IT Student looking for work?</h2>
      <span>Rijkware helps you find positions/projects which you can combine with your studies. </span>
      <a class="btn-student" href="#form" @click="changeForm(1)">Sign up</a>
    </div>
  </section>
  <div class="section-title engagement-stages">
    <h2>Engagement Stages</h2>
  </div>
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
      <div class="holder-steps-svg" v-if="!this.currentStep['isOnRightSide']" v-html="this.currentStep['svg']"></div>
      <div class="text-steps">
        <h3>{{ this.currentStep["title"] }}</h3>
        <p>{{ this.currentStep["text"] }}</p>
      </div>
      <div class="holder-steps-svg" v-if="this.currentStep['isOnRightSide']" v-html="this.currentStep['svg']"></div>
    </div>

  </section>


  <div class="section-title">
    <h2>Frequently Asked Questions</h2>
  </div>
  <section class="section-qna">
    <details class="holder-qna" v-for="faq in this.allFaqs">
      <summary>
        <h3 class="title-faq-why">
          <svg width="28" height="28" fill="royalblue" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
                  d="M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm4.448-10.448-3.6-3.6a1.2 1.2 0 0 0-1.696 1.696l1.551 1.552H8.4a1.2 1.2 0 1 0 0 2.4h4.303l-1.551 1.552a1.2 1.2 0 1 0 1.696 1.696l3.6-3.6a1.2 1.2 0 0 0 0-1.696Z"
                  clip-rule="evenodd"></path>
          </svg>
          {{ faq["summary"] }}
        </h3>
      </summary>
      <div class="text-why">
        <p>
          {{ faq["text"] }}
        </p>
      </div>
    </details>
  </section>


  <div class="section-title" id="contactService">
    <h2>Contact & Service</h2>
  </div>
  <section class="section-contact">
    <div class="holder-contact">
      <div class="card-contact card-contact-form" href="#form">
        <div>
          <i class="fa-solid fa-address-book"></i>
          <h4>Form</h4>
        </div>
        <strong style="position: absolute; color: royalblue; opacity: 0.4; margin-top: 16px;">For most
          inquiries</strong>
        <a href="#form">Use this form</a>
      </div>
      <div class="card-contact">
        <div>
          <i class="fa-solid fa-envelope"></i>
          <h4>Email</h4>
        </div>
        <a href="mailto:contact@rijkwa.re" target="_blank">contact@rijkwa.re</a>
      </div>
      <div class="card-contact">
        <div>
          <i class="fa-solid fa-phone"></i>
          <h4>Phone</h4>
        </div>
        <a href="tel:+31642068928">+31 6 420 68 928</a>
      </div>
      <div class="card-contact">
        <div>
          <i class="fa-brands fa-whatsapp"></i>
          <h4>WhatsApp</h4>
        </div>
        <a href="tel:+31642068928">+31 6 420 68 928</a>
      </div>
    </div>
  </section>
</template>

<script>
import anime from 'animejs';
import steps from "../assets/json/steps.js";
import faqs from "../assets/json/faqs.js";
import reasons from "@/assets/json/reasons";

import FormBusiness from "@/components/forms/FormBusiness.vue";
import StudentBusiness from "@/components/forms/FormStudent.vue";
import OtherBusiness from "@/components/forms/FormOther.vue";


export default {
  name: "HomePage",
  components: {
    'form-business': FormBusiness,
    'form-student': StudentBusiness,
    'form-other': OtherBusiness,
  },
  data() {
    return {
      currentStep: {},
      formType: [true, false, false],
      allSteps: [],
      allFaqs: [],
      allReasons: [],
      businessFormResults: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      },
      studentFormResults: {
        firstName: "",
        lastName: "",
        email: "",
        university: "",
        study: "",
        year: 1,
      },
      otherFormResults: {
        name: "",
        email: "",
        message: "",
      },
      sendingFormMsg: false,
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

    faqs.forEach((faq) => {
      this.allFaqs.push(faq);
    });

    reasons.forEach((reason) => {
      this.allReasons.push(reason);
    });

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
          delay: 700
        })
        .add({
          targets: '.hero-text-large .letter',
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=775',
          delay: (el, i) => 36 * (i + 1)
        })
        .add({
          targets: '.form',
          opacity: [0, 1],
          translateY: [10, 0],
          easing: "easeOutExpo",
          duration: 250,
          // offset: '-=775',
        });


    // Function to check if an element is in the viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    const mobileCheck = () => {
      let check = false;
      (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };

    function handleScroll() {
      const sections = document.querySelectorAll('.fade-in-section');

      sections.forEach((section) => {
        if (isInViewport(section) || mobileCheck()) {
          section.classList.add('is-visible');
        }
      });
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
  },
  computed: {},
  methods: {
    startBrandAnimation() {
      setInterval(() => {
        const firstElement = this.brandIcons.shift();
        this.brandIcons.push(firstElement);
      }, 3000);
    },

    changeForm(formType) {
      this.formType.forEach((form, index) => {
        this.formType[index] = index === formType;
      });
    },

    submitForm() {
      if (this.formType[0] && !this.checkValues(this.businessFormResults)) {
        return;
      } else if (this.formType[1] && !this.checkValues(this.studentFormResults)) {
        return;
      } else if (this.formType[2] && !this.checkValues(this.otherFormResults)) {
        return;
      }

      this.sendingFormMsg = true;
      this.postMessage();
    },


    checkValues(results) {
      let check = true;
      Object.keys(results).forEach((key) => {
        if (results[key] === '') {
          check = false;
        }
      });
      return check;
    },

    async postMessage() {
      let url = 'rijkware.nl/api/contact/';
      let msg;

      if (this.formType[0]) {
        url += 'business';
        msg = this.businessFormResults;
      } else if (this.formType[1]) {
        url += 'student';
        msg = this.studentFormResults;
      } else {
        url += 'other';
        msg = this.otherFormResults;
      }

      await fetch(url, {
        method: 'POST',
        body: JSON.stringify(msg),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        if (response.status === 200) {
          alert('Message sent!');
        } else {
          alert('Something went wrong, please try again later');
        }
        this.sendingFormMsg = false;
      });


    },

    changeStep(step) {
      this.currentStep = this.allSteps[step - 1]
    },
  }
}
</script>
<style scoped>
.loader-form {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s;
  border-radius: 12px;
}

.spinner-form {
  width: 50px;
  height: 50px;
  border: 5px solid #fff;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-in-section {
  opacity: 0; /* Initially, sections are invisible */
  transform: translateY(20px); /* Initially, they are pushed down by 20px */
  transition: opacity 0.5s, transform 0.5s;
}

.fade-in-section.is-visible {
  opacity: 1; /* Sections become visible */
  transform: translateY(0); /* Sections move back to their original position */
}


.radio-inputs {
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio-inputs > * {
  margin: 6px;
}

.radio-input:checked + .radio-tile-form {
  border-color: #2260ff;
//box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1); transform: translateY(-5px); color: #2260ff;
}

.radio-input:checked + .radio-tile-form:before {
  transform: scale(1);
  opacity: 1;
  background-color: #2260ff;
  border-color: #2260ff;
}

.radio-input:checked + .radio-tile-form .radio-icon svg {
  fill: #2260ff;
}

.radio-input:checked + .radio-tile-form .radio-label {
  color: #2260ff;
}

.radio-input:focus + .radio-tile-form {
  border-color: #2260ff;
}

.radio-input:focus + .radio-tile-form:before {
  transform: scale(1);
  opacity: 1;
}

.radio-tile-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  min-height: 80px;
  border-radius: 0.5rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
}

.radio-tile-form:before {
  content: "";
  position: absolute;
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border: 2px solid #b5bfd9;
  background-color: #fff;
  border-radius: 50%;
  top: 0.25rem;
  left: 0.25rem;
  opacity: 0;
  transform: scale(0);
  transition: 0.25s ease;
}

.radio-tile-form:hover {
  border-color: #2260ff;
}

.radio-tile-form:hover:before {
  transform: scale(1);
  opacity: 1;
}

.radio-icon svg {
  width: 2rem;
  height: 2rem;
  fill: #494949;
}

.radio-label {
  color: #707070;
  transition: 0.375s ease;
  text-align: center;
  font-size: 13px;
}

.radio-input {
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}


.card-contact a {
  color: royalblue;
  font-weight: bold;
  text-underline-offset: 8px;
}

.card-contact p {
  user-select: none;
}

.card-contact i {
  font-size: 64px;
}

.card-contact:hover {
  transform: scale(1.02, 1.02);
  transition: transform 300ms ease;
}

.card-contact {
  width: 250px;
  height: 100%;
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
  height: 350px;
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

.holder-steps {
  padding: 20px;
  height: 400px;
  width: 800px;
  background-color: #CDDBFF;
  border-radius: 36px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.section-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100vw;
  height: 550px;
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
  background: rgba(255, 255, 255, 0.12);
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
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
//font-size: xxx-large; //letter-spacing: 1px; font-weight: bold;
}

.holder-student span {
  color: white;
  margin-bottom: 16px;
  font-family: 'Lexend', sans-serif;
}

.btn-student {
  font-family: 'Lexend', sans-serif;
  text-decoration: none;
  background-color: white;
  border: none;
  border-radius: 16px;
  padding: 20px 30px;
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


details[open] .title-faq-why svg {
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
  flex-direction: column;
  gap: 16px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.holder-why {
  display: flex;
  flex-direction: column;
  width: 700px;
  max-width: 1250px;
  gap: 20px;
  padding: 20px 20px 0 20px;
  background-color: #cedbff;
  border-radius: 36px;
  z-index: 10;
}

.reason-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  padding: 0 20px;
}

.reason-why {
  border-radius: 18px;
  margin-bottom: 10px;
  padding: 5px 5px 10px 16px;
  list-style-type: upper-roman;
  background: whitesmoke;
  box-shadow: 20px 20px 60px #d0d3d9,
  -20px -20px 60px #ffffff,
  -5px -5px 30px #d0d3d9;
}

.li-why {
  font-family: 'Quicksand', serif;
  font-weight: bold;
  color: royalblue;
  font-size: 1.2rem;
}

ul {
//text-align: center; padding-top: 15px; padding-left: 0; width: 100%; list-style-position: inside;
}

li::marker {
  font-size: 20px;
  font-weight: bold;
}

.image-why-holder {
  height: 700px;
  margin: 2rem;
  background-color: #0e3fcb;
  border-radius: 36px;
  overflow: hidden;
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
  padding-bottom: 10px;
}

.title-faq-why {
  font: bold 2rem 'Quicksand', sans-serif;
  color: royalblue;
}

.text-why {
  font-family: Lexend, sans-serif;
  margin: 0;
  color: #191919;
}


.title-hire-student-developer {
  z-index: 10;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  text-align: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  font-size: x-large;
  animation: upAndDown 3s ease infinite;
}

@keyframes upAndDown {
  0% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
}

.hero-waves {
  z-index: 2;
  position: absolute;
  bottom: 0;
//-webkit-filter: drop-shadow(-3px -3px 0 whitesmoke); //filter: drop-shadow(-3px -3px 0 whitesmoke);
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
  border-radius: 24px;
  position: relative;
  transition: ease-in-out 100ms;
  box-shadow: 20px 20px 60px rgba(19, 67, 180, 0.32),
  -20px -20px 60px rgba(25, 91, 244, 0.3);
}

.visit-contact-page {
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
  .card-contact strong {
    padding-top: 40px;
    font-size: 12px;
  }

  .card-contact a {
    font-size: 12px;
    text-decoration: none;
  }

  .card-contact i {
    font-size: 40px;
    padding-bottom: 8px;
  }

  .section-contact {
    margin-top: 0;
    height: fit-content;
    width: 100vw;
    flex-direction: row;
  }

  .holder-contact {
    flex-wrap: wrap;
    gap: 20px;
  }

  .card-contact {
    justify-content: space-evenly;
    height: 180px;
    width: 46%;
  //padding: 10px;
  }

  .text-why p {
    font-size: large;
    font-family: 'Lexend', sans-serif;
  }

  .engagement-stages {
    margin-top: 50px;
  }

  .section-steps {
    height: fit-content;
  }

  .text-steps {
    width: 100%;
  }

  .holder-steps-svg {
    display: none;
  }

  .holder-steps {
    flex-direction: column;
    width: 95vw;
    height: 100%;
  }

  .reason-section {
    margin-top: 20px;
  }

  .radio-tile-group {
    justify-content: space-around;
  }

  .section-steps {
    margin-top: 10px;
  }


  .text-student {
    font-size: 4rem;
    padding: 15px;
  }

  .holder-student span {
    font-size: 1.5rem;
    padding: 15px;
    margin-bottom: 60px;
  }

  .section-student {
    height: 100vh;
  }


  .image-why-holder {
    height: 50vh;
    max-width: 400px;
  }

  .image-why {
    width: 95vw;
    max-width: 400px;
    height: fit-content;
  }

  .title-why {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .title-faq-why {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }

  .title-faq-why svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  .holder-why {
    width: 95vw;
    height: fit-content;
  }

  .visit-contact-page {
    padding-top: 7px;
    font-size: 0.6rem;
  }

  .title-hire-student-developer {
    opacity: 0.7;
    padding-top: 30px;
    height: 60px;
  }

  .hero-container-form {
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .radio-tile-form {
    width: 95px;
    height: 50px;
  }

  .section-why {
    margin-top: 20px;
    flex-direction: column;
  }

  .hero-waves {
    width: 100vw;
    overflow: hidden;
  }

  .hero-container {
    width: auto;
    padding: 0 8px;
  }

  .form {
    width: 90vw;
    height: 63vh;
  }

  .main-container {
    justify-content: start;
  }

  .hero-letters {
    font-size: 1.6rem;
  }

  .hero-text-large {
    margin-top: 100px;
    margin-bottom: 30px;
  }

  .step-container h1 {
    font-size: 1.5rem;
  }

  .step-container p {
    font-size: 1rem;
  }
}
</style>