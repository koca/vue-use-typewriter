import { reactive, toRefs, watch, Ref } from 'vue'

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
  words: string[] | Ref<string[]>
  min?: number | Ref<number>
  max?: number | Ref<number>
  wordDelay?: number | Ref<number>
  eraseDelay?: number | Ref<number>
}

export function useTypewriter(options: Options = { words: [] }) {
  const state = reactive({
    currentWord: 0,
    word: '',
  })
  const localOptions = reactive({
    words: options.words || [],
    min: options.min || 10,
    max: options.max || 80,
    wordDelay: options.wordDelay || 2000,
    eraseDelay: options.eraseDelay || 1000,
  })
  watch(
    () => state.currentWord,
    async () => {
      const string = localOptions.words[state.currentWord]
      const erase = async () => {
        for (let i = 0; i < string.length; i++) {
          await randomDelay({ min: localOptions.min, max: localOptions.max })
          state.word = state.word.slice(0, state.word.length - 1)

          if (i === string.length - 1) {
            await delay(localOptions.eraseDelay)
            state.currentWord = state.currentWord === localOptions.words.length - 1 ? 0 : state.currentWord + 1
          }
        }
      }
      for (let i = 0; i < string.length; i++) {
        await randomDelay({ min: localOptions.min, max: localOptions.max })
        state.word = state.word + string.charAt(i)

        if (i === string.length - 1) {
          await delay(localOptions.wordDelay)
          erase()
        }
      }
    }
  )

  return toRefs(state)
}
