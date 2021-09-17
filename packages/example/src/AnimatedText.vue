<template>
  <div class="typewriter">
    {{ word }}
    <span class="cursor"></span>
  </div>
</template>
<script lang="ts" setup>
import { useTypewriter } from 'vue-use-typewriter'

const props = defineProps<{ words: string[]; min: number; max: number; wordDelay: number; eraseDelay: number }>()

const { word } = useTypewriter(props)
</script>
<style>
.typewriter {
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 10vw;
  height: 20vw;
  margin-top: 50px;
  margin-bottom: 10vh;
}

.cursor {
  border-radius: 0.1vw;
  margin-left: 3px;
  width: 1vw;
  height: 10vw;
  background: rgb(0, 81, 255);
  animation: blink 0.75s linear infinite forwards;
}

@media (min-width: 768px) {
  .typewriter {
    font-size: 5vw;
    height: 10vw;
  }
  .cursor {
    width: 0.4vw;
    height: 5vw;
  }
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
