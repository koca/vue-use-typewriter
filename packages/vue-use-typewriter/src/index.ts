import { reactive, watch, computed } from 'vue'

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const nextFrame = () => {
  return new Promise((resolve) => {
    requestAnimationFrame(resolve)
  })
}

const randomDelay = async ({ min, max }: { min: number; max: number }) => {
  const delay = Math.random() * (max - min) + min
  const startTime = performance.now()

  while (performance.now() - startTime < delay) {
    await nextFrame()
  }
}
interface Options {
  words: Array<string>
  min?: number
  max?: number
  wordDelay?: number
  eraseDelay?: number
}

export function useTypewriter(options: Options = { words: [] }) {
  const state = reactive<{ currentWord: number; word: string }>({
    currentWord: 0,
    word: '',
  })

  const localOptions = computed(() => {
    return {
      words: options.words ?? [],
      min: options.min ?? 10,
      max: options.max ?? 80,
      wordDelay: options.wordDelay ?? 2000,
      eraseDelay: options.eraseDelay ?? 1000,
    }
  })

  watch(
    () => [state.currentWord],
    async () => {
      const string = localOptions.value.words[state.currentWord]
      const erase = async () => {
        for (let i = 0; i < string.length; i++) {
          await randomDelay({ min: localOptions.value.min, max: localOptions.value.max })
          state.word = state.word.slice(0, state.word.length - 1)

          if (i === string.length - 1) {
            await delay(localOptions.value.eraseDelay)
            state.currentWord = state.currentWord === localOptions.value.words.length - 1 ? 0 : state.currentWord + 1
          }
        }
      }
      for (let i = 0; i < string?.length; i++) {
        await randomDelay({ min: localOptions.value.min, max: localOptions.value.max })
        state.word = state.word + string.charAt(i)

        if (i === string.length - 1) {
          await delay(localOptions.value.wordDelay)
          erase()
        }
      }
    },
    { immediate: true }
  )

  return {
    word: computed(() => state.word),
  }
}
