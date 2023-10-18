<script setup>

</script>

<template>
  <p class="title">Schedule a <span class="title-free">Free</span> Consultation</p>
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
</template>

<style scoped>

</style>