<template>
  <div class="bg-brand-charcoal p-6 rounded-3xl shadow-lg text-brand-cream">
    <span class="material-symbols-outlined text-3xl mb-3 text-brand-red">graphic_eq</span>
    <p class="font-sans text-sm opacity-80 mb-2">Voice Note • 2m 14s</p>
    <div class="w-full h-8 flex items-center gap-1 opacity-60">
      <div
        v-for="(height, index) in waveformBars"
        :key="index"
        class="bg-brand-cream rounded-full w-1"
        :class="height"
      ></div>
    </div>
  </div>
</template>

<script setup>
const waveformBars = [
  'h-4',
  'h-6',
  'h-3',
  'h-8',
  'h-5',
  'h-2'
]
</script>
