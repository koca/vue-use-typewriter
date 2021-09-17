<template>
  <div class="control">
    <label>{{ props.label }}</label>
    <input
      :value="modelValue"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :style="{
        background: `linear-gradient(to right, #05F 0%, #05F ${sliderBackgroundPercentage}%, rgba(255, 255, 255, 0.3) ${sliderBackgroundPercentage}%, rgba(255, 255, 255, 0.3) 100%)`,
      }"
      v-bind="$attrs"
      @input="handleInput"
    />
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  modelValue: number
  label: string
  min: number
  max: number
  step: number
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', range: number): void
}>()

const handleInput = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  // target value is string, we'll convert to number
  const value = parseInt(target.value) || 0
  emit('update:modelValue', value)
}

const sliderBackgroundPercentage = computed(() => props.modelValue / (props.max / 100))
</script>

<style>
label {
  text-align: right;
  width: 150px;
  flex-shrink: 0;
  padding-right: 25px;
}

input[type='range'] {
  appearance: none;
  height: 2px;
  border-radius: 2px;
  outline: none;
  /* width: 250px; */
  width: 100%;
}

input[type='range']::-webkit-slider-thumb {
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: #fff;
}
</style>
