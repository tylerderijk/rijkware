<template>
    <div class="rijkware_logo_wrapper">
      <router-link to="/">
        <img src="./assets/img/RijkwareLogoTRNS%20COMPR.png" alt="Rijkware" class="rijkware_logo">
      </router-link>
    </div>
    <button class="menu_button" @click="toggleNav()">
      <svg width="64" height="64" fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 7h5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 8h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2Zm-7-4h12a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z"></path>
      </svg>
    </button>
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

  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
      // document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    }
  }
}
</script>
<style>
main {
  z-index: 2;
  transition: transform 600ms cubic-bezier(.13, .53, .38, .97);
}

.move-main {
  transform: translateX(-30vw);
}

.rijkware_logo {
  height: 20rem;
}

.rijkware_logo_wrapper {
  display: flex;
  align-items: end;
  justify-content: center;
}

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 50vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;
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
  font-size: 3rem;
}

nav.show-nav {
  transform: translateX(0);
}

.menu_button {
  color: gray;
  font-size: 1.5rem;
  font-family: 'Bricolage Grotesque', sans-serif;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  padding: 0.5rem;
  margin: 0.7rem;
  background-color: rgba(255, 255, 255, 0.674);
  border: 1px solid rgba(255, 255, 255, 0.222);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  border-radius: .7rem;
}

h1 {
  font-family: 'Quicksand', sans-serif;
  color: #A7C5CF;
  font-size: 4rem;
  opacity: 0.3;
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

main {

}
</style>
