<template>
  <div class="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 h-[500px] flex flex-col justify-center items-center text-center relative overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent opacity-50"></div>
    <span class="material-symbols-outlined text-4xl text-brand-red mb-6">format_quote</span>
    <p class="font-display text-2xl md:text-3xl text-brand-charcoal leading-relaxed z-10 px-4">
      "{{ quote }}"
    </p>
    <div class="mt-8 flex items-center gap-3 z-10">
      <div class="w-8 h-8 rounded-full bg-brand-red text-brand-cream flex items-center justify-center font-display italic">
        {{ author }}
      </div>
      <span class="font-sans text-sm text-gray-500">{{ entry }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  entry: {
    type: String,
    required: true
  }
})
</script>
