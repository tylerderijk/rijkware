<script>
export default {
  name: "FormStudent",
  props: [
    'results'
  ],
  emits: ['submit'],
  methods: {
    addRemoveYear(year) {
      if (year < 1 || year > 10) {
        return;
      }
      this.results.year = year;
    }
  }
}

</script>

<template>
  <p class="title">Work as  <span class="title-free">Student Developer</span></p>
  <div class="flex">
    <label>
      <input v-model="results.firstName" maxlength="30" required placeholder="First Name" type="text" class="input"/>
    </label>
    <label>
      <input v-model="results.lastName" maxlength="50" required placeholder="Last Name" type="text" class="input"/>
    </label>
  </div>
  <label>
    <input v-model="results.email" maxlength="50" required placeholder="Email" type="email" class="input"/>
  </label>
  <label>
    <input v-model="results.university" maxlength="50" required placeholder="University" type="text" class="input"/>
  </label>
  <label>
    <input v-model="results.study" maxlength="50" required placeholder="Study" type="text" class="input"/>
  </label>
  <div class="university-year">

    <label>Current University Year</label>
  <div class="quantity">
    <button @click="addRemoveYear(results.year-1)">
      <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M20 12L4 12"></path>
      </svg>
    </button>
    <label>{{ results.year }}</label>
    <button @click="addRemoveYear(results.year+1)">
      <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" stroke="#47484b" d="M12 4V20M20 12H4"></path>
      </svg>
    </button>
  </div>
  </div>
</template>

<style scoped>
.university-year {
  display: flex;
  justify-content: space-between;
  width: fit-content;
  gap: 20px;
}
.quantity {
  height: 30px;
  display: flex;
  grid-template-columns: 1fr 1fr 1fr;
  margin: auto;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
  filter: drop-shadow(0px 1px 0px #efefef)
  drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
}

.quantity label {
  width: 20px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
  font-size: 15px;
  font-weight: 700;
  color: #47484b;
}

.quantity button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  outline: none;
  background-color: transparent;
  padding-bottom: 2px;
}






.title-free {
  font-family: 'Lexend', sans-serif;
  color: darkorange;
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

.form {
  border: rgba(0, 0, 0, 0.05) 8px solid;
  z-index: 3;
  font-family: 'Quicksand', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90vw;
  max-width: 450px;
  background-color: #fff;
  padding: 20px;
  border-radius: 36px;
  position: relative;
  transition: ease-in-out 100ms;
}



.visit-contact-page {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}

.visit-contact-page {
  text-align: center;
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

@media only screen and (max-width: 768px) {


  .title {
    font-size: 1.3rem;
    margin: 0;
  }

  .input::placeholder {
    font-size: 0.8em;
  }

  .input {
    height: 40px;
  }
}
</style>