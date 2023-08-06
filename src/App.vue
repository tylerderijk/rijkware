
<template>
  <main data-nav="false">
    <router-view/>
  </main>
  <button @click="toggleNav()">press me</button>
  <nav>
          <router-link to="/" class="navbar-brand">Rijkware</router-link>
  </nav>
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
      document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    }
  }
}
</script>
<style>
body[data-nav="true"] main {
  transform: translateX(-50%);
}
main {
  z-index: 2;
  transition: transform 500ms cubic-bezier(.13, .53, .38, .97);
}
nav {
  height: 100%;
  width: 50vw;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -2;
  overflow: auto;
  background: red;
}

h1 {
  font-family: 'Quicksand', sans-serif;
  color: mediumseagreen;
  font-size: 4rem;
  opacity: 0.3;
}
.navbar-brand {
  padding: 10px;
  opacity: 0.4;
  transition: ease-in-out 0.5s;
}
.navbar-brand:hover {
  opacity: 1;
}

.margin-horizontal {
  margin-left: 10vw;
  margin-right: 10vw;
}
::-moz-selection { /* Code for Firefox */
  color: white;
  background: mediumseagreen;
}

::selection {
  color: white;
  background: mediumseagreen;
}
main {

}
</style>
