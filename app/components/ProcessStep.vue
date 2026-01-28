<template>
  <div class="group cursor-pointer">
    <div class="flex items-baseline gap-4 mb-2">
      <span class="font-sans text-sm text-brand-red font-medium">{{ number }}</span>
      <h3 class="font-display text-4xl md:text-5xl text-brand-cream group-hover:text-brand-red transition-colors duration-300">
        {{ title }}
      </h3>
    </div>
    <p class="font-sans text-brand-cream/50 text-lg pl-9 max-w-md border-l border-brand-cream/10 ml-2 py-2 group-hover:border-brand-red/50 transition-colors">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>
