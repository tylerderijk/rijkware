<template>
  <div class="rijkware_logo_wrapper">
<!--    <router-link to="/">-->
<!--      <img src="./assets/img/RijkwareLogoTRNS_smal_COMPr.png" alt="Rijkware" class="rijkware_logo">-->
<!--    </router-link>-->
    <div class="menu-holder" @click="toggleNav()">
      <svg viewBox="0 0 175 80" width="40" height="40">
        <rect width="120" height="15" fill="#f0f0f0" rx="10"></rect>
        <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
        <rect y="60" width="140" height="15" fill="#f0f0f0" rx="10"></rect>
        <rect y="90" width="130" height="15" fill="#f0f0f0" rx="10"></rect>
      </svg>
    </div>
  </div>
<!--  <button class="menu_button" >-->

<!--    Menu-->
<!--    <svg width="64" height="64" fill="#A7C3CD" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">-->
<!--      <path-->
<!--          d="M6 7h5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Zm-7-4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"></path>-->
<!--    </svg>-->
<!--  </button>-->
  <nav :class="{ 'show-nav': showNav }">
    <div class="margin-horizontal">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <main :data-nav="showNav" :class="{ 'move-main': showNav }">
    <router-view/>
<div class="cloud-holder"></div>
    <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud cloud-one">
    <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud cloud-two">
    <img src="./assets/img/clouds/cloud-three.png" alt="clouds" class="cloud cloud-three">
    <img src="./assets/img/clouds/cloud-one.png" alt="clouds" class="cloud cloud-four">
    <img src="./assets/img/clouds/cloud-two.png" alt="clouds" class="cloud cloud-five">
  </main>
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
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    }
  }
}
</script>
<style>
router-view {
  z-index: 99999;
}
main {
  z-index: 2;
  transition: transform 600ms cubic-bezier(.13, .53, .38, .97);
  overflow: hidden;
}

.move-main {
  transform: translateX(-20vw);
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
 0%{
    transform: translateY(500%) translateX(-40%);
 }
  100% {
    transform: translateY(-500%) translateX(40%);
  }
}







.rijkware_logo {
  opacity: 0.8;
  padding: 20px;
  height: 120px;
  position: absolute;
}

.rijkware_logo_wrapper {
  background-color: #001157;

  //display: flex;
  //justify-content: center;
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
  //font-size: 1.5rem;
  //font-family: 'Bricolage Grotesque', sans-serif;
  text-transform: uppercase;
  //position: absolute;
  //top: 10px;
  //right: 10px;
  //z-index: 100;
  //padding: 1rem;
  //background-color: rgba(255, 255, 255, 0);
  //border: 1px solid rgba(255, 255, 255, 0);

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
  display: none;
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

