<template>
  <router-link to="/" class="rijkware_logo_wrapper">
    <img src="./assets/img/RijkwareLogo20231014.png" alt="Rijkware" class="rijkware_logo">
  </router-link>
  <main>
    <router-view/>
    <div class="cloud-holder"></div>
    <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud cloud-one">
    <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud cloud-two">
    <img src="./assets/img/clouds/cloud-three.png" alt="clouds" class="cloud cloud-three">
    <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud cloud-four">
    <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud cloud-five">
  </main>
  <footer>
    <div>
      <p>KvK: 824 77 999</p>
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
</template>
<script>
import anime from 'animejs';

export default {
  name: "Index",
  data() {
    return {
      showNav: false,
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
      duration: 9000,
      easing: 'easeInOutQuad',
      loop: true,
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
      duration: 8000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 6000,
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
      duration: 9000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 3000,
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
      duration: 9000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 6000,
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
      duration: 8000,
      easing: 'easeInOutQuad',
      loop: true,
      delay: 2000,
    });

  },
  methods: {}
}
</script>
<style>
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
  font-size: 1.5rem;
  padding: 20px;
}

.rijkware_logo_footer {
  text-align: center;
  height: 120px;
  padding: 20px;
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
  width: 15vw;
  opacity: 0;
}

.cloud-two {
  top: 80vh;
  left: 75vw;
  width: 15vw;
  opacity: 0;
}

.cloud-three {
  top: 75vh;
  left: 40vw;
  width: 15vw;
  opacity: 0;
}

.cloud-four {
  top: 75vh;
  left: 20vw;
  width: 5vw;
  opacity: 0;
}

.cloud-five {
  top: 75vh;
  left: 65vw;
  width: 5vw;
  opacity: 0;
}

@keyframes cloud-movement {
  0% {
    transform: translateY(500%) translateX(-40%);
  }
  100% {
    transform: translateY(-500%) translateX(40%);
  }
}


.rijkware_logo {
  opacity: 0.5;
  padding: 20px;
  height: 90px;
  position: absolute;
}

.rijkware_logo_wrapper {
  background-color: #001157;
  width: 100vw;
  display: flex;
  justify-content: center;
}

nav {
  display: none;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 95;
  overflow: auto;
  background: rgba(167, 197, 207, 0.39);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  transform: translateX(100vw);
  transition: transform 0.7s ease-in-out;
}

.nav-item {
  z-index: 101;
  font-family: 'Bricolage Grotesque', sans-serif;
  font-size: 6.5rem;
  transition: ease-in-out all .2s;
}

.nav-item:hover {
  text-decoration: underline;
  color: #b2d9e7;
  cursor: pointer;
}

.nav-item:hover {
  color: #0d8bb9;
}

nav.show-nav {
  transform: translateX(0);
}

.menu_button {
//font-size: 1.5rem; //font-family: 'Bricolage Grotesque', sans-serif; text-transform: uppercase; //position: absolute; //top: 10px; //right: 10px; //z-index: 100; //padding: 1rem; //background-color: rgba(255, 255, 255, 0); //border: 1px solid rgba(255, 255, 255, 0);

}

.margin-horizontal {
  margin-left: 10vw;
  margin-right: 10vw;
}

::-moz-selection { /* Code for Firefox */
  color: white;
  background: blue;
}

::selection {
  color: white;
  background: blue;
}

.menu-holder {
  display: block;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  margin: 10px;
  z-index: 100;
}

.switch-holder svg:active {
  transition: ease-in-out 300ms;
  transform: scale(0.7);
}

// Phone only
@media only screen and (max-width: 768px) {
  .menu-holder {
    display: block;
  }


  .rijkware_logo {
    height: 150px;
  }

  .rijkware_logo_wrapper {
    justify-content: start;
  }

  nav {
    display: flex;
    width: 100vw;
  }

  .nav-item {
    font-size: 3rem;
  }
}


</style>

