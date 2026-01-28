<template>
  <div class="bg-[#e8e4d8] p-6 rounded-3xl shadow-lg relative overflow-hidden">
    <div class="absolute top-0 right-0 w-24 h-24 bg-brand-red/10 rounded-full -mr-10 -mt-10 blur-xl"></div>
    <h3 class="font-display text-2xl text-brand-charcoal mb-4">Daily Reflection</h3>
    <div class="space-y-3">
      <div
        v-for="(width, index) in reflectionLines"
        :key="index"
        class="h-2 bg-brand-charcoal/10 rounded-full"
        :class="width"
      ></div>
    </div>
    <div class="mt-6 flex justify-end">
      <span class="material-symbols-outlined text-brand-charcoal/40">arrow_forward</span>
    </div>
  </div>
</template>

<script setup>
const reflectionLines = [
  'w-3/4',
  'w-full',
  'w-5/6'
]
</script>
