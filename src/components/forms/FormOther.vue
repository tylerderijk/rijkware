<script>
export default {
  name: "FormOther",
  props: {
    results: Object,
    currentLang: Object
  },
  // emits: ['submit']
}

</script>

<template>
  <p class="title">{{ currentLang.learnMoreAbout }} <span class="title-free">{{ currentLang.rijkware }}</span></p>
    <label>
      <input v-model="results.name" maxlength="30" required :placeholder="currentLang.firstName" type="text" class="input"/>
    </label>
  <label>
    <input v-model="results.email" maxlength="50" required :placeholder="currentLang.email" type="email" class="input"/>
  </label>
  <label>
          <textarea v-model="results.message" maxlength="200" required :placeholder="currentLang.message"
                    class="input message-input"></textarea>
  </label>
  <small class="message-input-count">{{ results.message.length }}/200</small>
</template>

<style scoped>
.title-free {
  font-family: 'Lexend', sans-serif;
  color: royalblue;
  font-weight: 600;
  padding: 0 6px;
}


.title {
  font-family: 'Quicksand', sans-serif;
  font-size: 26px;
  color: #191919;
  font-weight: 600;
  position: relative;
  display: flex;
  align-items: center;
}

.visit-contact-page a {
  color: royalblue;
}

.visit-contact-page a:hover {
  text-decoration: underline royalblue;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  color: black;
  width: 100%;
  padding: 15px 10px 15px 12px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}

.form label .input:valid + span {
  opacity: 0;
}

.message-input-count {
  gap: 0;
  display: flex;
  justify-content: end;
  color: gray;
}

@media only screen and (max-width: 768px) {


  .title {
    font-size: 1.3rem;
    margin: 0;
  }

  .message-input-count {
    margin-top: -10px;
    height: 14px;
    font-size: 0.8em;
  }

  .input::placeholder {
    font-size: 0.8em;
  }

  .input {
    height: 40px;
  }

  .message-input {
    height: 80px;
  }
}
</style>