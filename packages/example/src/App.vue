<template>
  <div class="wrapper">
    <AnimatedText :key="words" v-bind="options"></AnimatedText>

    <div class="controls">
      <div class="control control--text">
        <label>Change Text:</label>
        <input v-model="wordsValue" type="text" />
        <button @click="words = wordsValue">Save</button>
      </div>
      <RangeInput v-model="options.min" label="Minimum:" :min="0" :max="200" :step="5"></RangeInput>
      <RangeInput v-model="options.max" label="Maximum:" :min="0" :max="200" :step="5"></RangeInput>
      <RangeInput v-model="options.wordDelay" label="Word delay:" :min="0" :max="10000" :step="500"></RangeInput>
      <RangeInput v-model="options.eraseDelay" label="Erase delay:" :min="0" :max="10000" :step="1000"></RangeInput>
    </div>

    <ul>
      <li>
        <a href="https://github.com/koca/vue-use-typewriter" target="_blank" aria-label="github">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFF"> <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/imesutkoca" target="_blank" aria-label="twitter">
          <!-- prettier-ignore -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFF"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
        </a>
      </li>
    </ul>
    <div class="footer">
      Made with
      <span>&lt;3</span>
      by
      <a target="_blank" href="https://twitter.com/imesutkoca">Mesut Koca</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive } from 'vue'
import AnimatedText from './AnimatedText.vue'
import RangeInput from './RangeInput.vue'

const words = ref('Hello,This is,a hook')
const wordsValue = ref(words.value)

const commaSeperatedWords = computed(() => (words.value ? words.value.split(',') : []))

const options = reactive({
  words: commaSeperatedWords, // ['Hello', 'World', 'This is', 'a hook']
  min: 10,
  max: 80,
  wordDelay: 2000,
  eraseDelay: 1000,
})
</script>

<style>
::selection {
  color: #fff;
  background: rgba(0, 85, 255, 0.99);
}

::-moz-selection {
  color: #fff;
  background: rgba(0, 85, 255, 0.99);
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html,
body {
  width: 100%;
  height: 100%;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 18px;
  background: #000;
  color: #fff;
  margin: 0;
}

body > div {
  width: 100%;
  height: 100%;
}

a {
  opacity: 0.5;
  transition: opacity 0.2s ease;
}

a:hover {
  opacity: 1;
}

ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  margin-top: 10vh;
}

li {
  margin: 0 20px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
}

.controls {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-right: 25px;
}

.control {
  margin: 20px 0;
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 100%;
}

.control--text > input {
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  background: #555;
  outline: none;
  border: none;
  color: #fff;
}
.control--text > button {
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background: #05f;
  color: #fff;
}
.control--text > button:hover {
  background: rgb(42, 113, 255);
  color: #fff;
}

.footer {
  margin-top: 25px;
  color: #444;
}
.footer a {
  text-decoration: none;
  color: #999;
  padding-bottom: 5px;
  border-bottom: 1px solid #777;
}
.footer a:hover {
  color: #fff;
}
</style>
