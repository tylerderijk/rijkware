<template>
  <router-link to="/" class="rijkware_logo_wrapper">
    <img src="./assets/img/RijkwareLogo20231014.png" alt="Rijkware" class="rijkware_logo">
  </router-link>
  <main>
    <router-view/>
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

export default {
  name: "Index",
  data() {
    return {
      showLoaderScreen: true,
      disableScroll: true,
    }
  },
  watch: {
    '$route'() {

    }
  },
  beforeUpdate() {
  },
  mounted() {
// Show the loader when your component is mounted
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
//height: 120px; width: 400px; padding: 20px;
  opacity: 0.8;
}

router-view {
  z-index: 99999;
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
    width: 90%;
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

