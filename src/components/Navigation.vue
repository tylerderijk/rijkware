<template>

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
<style scoped>


</style>