<template>
  <router-link to="/" class="rijkware_logo_wrapper">
    <img src="./assets/img/RijkwareLogo20231014.png" alt="Rijkware" class="rijkware_logo">
  </router-link>
  <div class="flag-toggle" @click="toggleLanguage()">
    <div v-if="isEnglishFlag">
      <small class="language-switch">Current language:</small>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 30" width="40" height="27">
        <clipPath id="t">
          <path d="M25,15h25v15zv15h-25zh-25v-15zv-15h25z"/>
        </clipPath>
        <path d="M0,0v30h50v-30z" fill="#012169"/>
        <path d="M0,0 50,30M50,0 0,30" stroke="#fff" stroke-width="6"/>
        <path d="M0,0 50,30M50,0 0,30" clip-path="url(#t)" stroke="#C8102E" stroke-width="4"/>
        <path d="M-1 11h22v-12h8v12h22v8h-22v12h-8v-12h-22z" fill="#C8102E" stroke="#FFF" stroke-width="2"/>
      </svg>
    </div>
    <div v-else>
      <small class="language-switch">Huidige taal:</small>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="27" viewBox="0 0 9 6">
        <rect fill="#21468B" width="9" height="6"/>
        <rect fill="#FFF" width="9" height="4"/>
        <rect fill="#AE1C28" width="9" height="2"/>
      </svg>
    </div>
  </div>
  <main>
    <router-view :currentLang="this.currentLanguage"/>
    <div class="cloud-holder">
      <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud-one cloud">
      <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud-two cloud">
      <img src="./assets/img/clouds/cloud-three.png" alt="clouds" class="cloud-three cloud">
      <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud-four cloud">
      <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud-five cloud">
    </div>
  </main>
  <footer>
    <div>
      <p>KvK: 77829115</p>
      <p>&copy; 2023 Rijkware [Amsterdam, the Netherlands]</p>
    </div>
    <small style="text-align: center; color: whitesmoke; opacity: 0.5; width: 400px;">
      If you're still unsure about the skills of Student Developers, consider this:<br><br>
      This website was crafted by Tyler de Rijk during his third year of Software Engineering at the University of
      Applied Sciences in Amsterdam, and he had no prior development experience.<br><br>
      18th October 2023
    </small>
    <img src="./assets/img/RijkwareLogo20231014.png" alt="Rijkware" class="rijkware_logo_footer">
  </footer>
  <div v-if="this.showLoaderScreen" class="loader" ref="loader">
  </div>
</template>
<script>
import anime from 'animejs';
import lang_en from "@/assets/json/lang_en";
import lang_nl from "@/assets/json/lang_nl";

export default {
  name: "Index",
  data() {
    return {
      currentLanguage: {},
      showLoaderScreen: true,
      disableScroll: true,
      isEnglishFlag: true,
    }
  },
  watch: {
    //  $route (to, from) {
    //    if (to.fullPath === "/") {
    //      this.$router.push("/en"); // Push the "/en" route when the user enters the website
    //    }
    // }
  },
  beforeCreate() {
  },
  beforeUpdate() {
  },
  mounted() {
    this.currentLanguage = lang_en;
    this.showLoader();

    setTimeout(() => {
      this.hideLoader();
      this.disableScroll = false;
    }, 2000);


    anime({
      targets: '.cloud-one',
      translateY: '-70vh',
      translateX: [
        {value: '-2vw'},
        {value: '0vw'},
        {value: '-1vw'},
        {value: '0vw'},
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0, 0],
      duration: this.getRandomInt(4000) + 6000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: this.getRandomInt(1000) + 1000,
    });
    anime({
      targets: '.cloud-two',
      translateY: '-70vh',
      translateX: [
        {value: '-2vw'},
        {value: '0vw'},
        {value: '0vw'},
        {value: '-1vw'},
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0, 0],
      duration: this.getRandomInt(4000) + 5000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 7000,
    });
    anime({
      targets: '.cloud-three',
      translateY: '-75vh',
      translateX: [
        {value: '0vw'},
        {value: '-1vw'},
        {value: '0vw'},
        {value: '-2vw'},
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0, 0],
      duration: this.getRandomInt(4000) + 5000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 4000,
    });
    anime({
      targets: '.cloud-four',
      translateY: '-75vh',
      translateX: [
        {value: '0vw'},
        {value: '-1vw'},
        {value: '0vw'},
        {value: '-2vw'},
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0.7, 0],
      duration: this.getRandomInt(4000) + 5000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 7000,
    });
    anime({
      targets: '.cloud-five',
      translateY: '-75vh',
      translateX: [
        {value: '0vw'},
        {value: '-1vw'},
        {value: '0vw'},
        {value: '-2vw'},
      ],
      opacity: [0, 0.7, 0.7, 0.7, 0.7, 0],
      duration: this.getRandomInt(4000) + 6000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: this.getRandomInt(1000) + 1500,
    });

  },
  created() {
    // Event listener to prevent scrolling during the specified time
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleLanguage() {
      this.isEnglishFlag = !this.isEnglishFlag;

      if (this.isEnglishFlag) {
        this.currentLanguage = lang_en;
      } else {
        this.currentLanguage = lang_nl;
      }
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    handleScroll() {
      if (this.disableScroll) {
        window.scrollTo(0, 0);
      }
    },
    showLoader() {
      const loader = this.$refs.loader;
      const rijkwareLogo = document.querySelector('.rijkware_logo');

      anime({
        targets: loader,
        opacity: 1,
        duration: 500,
      });

      anime({
        targets: rijkwareLogo,
        scale: [2, 1],
        translateY: ['20vh', 0],
        duration: 1000,
        delay: 1000,
        easing: 'cubicBezier(0.760, 0.245, 0.455, 1.005)',
        complete: () => {
          this.hideLoader();
        }
      })
    },
    hideLoader() {
      const loader = this.$refs.loader;

      anime({
        targets: loader,
        opacity: 0,
        duration: 500,
        complete: () => {
          this.showLoaderScreen = false;
        }
      });
    },
  }
}
</script>
<style>


.rijkware_logo {
  padding: 20px;
  height: 90px;
  position: absolute;
  z-index: 51;
}

.rijkware_logo_wrapper {
  background-color: #001157;
  width: 100vw;
  display: flex;
  justify-content: center;
}


.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: royalblue;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  transition: opacity 0.5s;
  opacity: 1;
}

footer {
  background-color: royalblue;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer p {
  color: white;
  font-family: 'Bricolage Grotesque', sans-serif;
  padding: 20px;
  width: 400px;
}

.rijkware_logo_footer {
  text-align: center;
  width: 400px;
  opacity: 0.6;
  padding: 20px;
}

router-view {
  z-index: 99999;
}


.flag-toggle {
  position: absolute;
  top: 20px; /* Adjust as needed */
  right: 20px; /* Adjust as needed */
  cursor: pointer;
  z-index: 0; /* Ensure it's above other elements */
}


main {
  z-index: 2;
  transition: transform 600ms cubic-bezier(.13, .53, .38, .97);
  overflow: hidden;
}

.cloud {
  position: absolute;
  z-index: 0;
  opacity: 0.8;
}

.cloud-one {
  top: 70vh;
  left: 10vw;
  width: 150px;
  opacity: 0;
}

.cloud-two {
  top: 80vh;
  left: 75vw;
  width: 150px;
  opacity: 0;
}

.cloud-three {
  top: 75vh;
  left: 40vw;
  width: 150px;
  opacity: 0;
}

.cloud-four {
  top: 75vh;
  left: 20vw;
  width: 50px;
  opacity: 0;
}

.cloud-five {
  top: 75vh;
  left: 65vw;
  width: 50px;
  opacity: 0;
}

.language-switch {
  padding-right: 8px;
  color: whitesmoke;
}


::-moz-selection { /* Code for Firefox */
  color: white;
  background: blue;
}

::selection {
  color: white;
  background: blue;
}

.switch-holder svg:active {
  transition: ease-in-out 300ms;
  transform: scale(0.7);
}

@media only screen and (max-width: 768px) {
  .rijkware_logo_footer {
    //width: 90%;
    width: 100px;
  }

  .language-switch {
    display: none;
  }

  .footer p {
    width: 100px;
  }

  footer {
    flex-direction: column-reverse;
    height: fit-content;
    width: 100vw;
  }

  main, router-link {
    overflow: hidden;
  }

  footer * {
    margin-top: 20px;
    padding: 20px;
  }

  nav {
    display: flex;
    width: 100vw;
  }

  footer div {
    padding: 0;
  }

  footer div * {
    width: fit-content;
  }

}


</style>

