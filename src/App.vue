<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation></Navigation>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style>
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
