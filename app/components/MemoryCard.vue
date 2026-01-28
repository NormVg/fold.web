<template>
  <div class="bg-white p-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <div class="aspect-[4/5] bg-neutral-100 rounded-xl overflow-hidden mb-4 relative group">
      <div v-if="!image" class="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
        <span class="material-symbols-outlined text-4xl">photo_camera</span>
      </div>
      <img
        v-if="image"
        :alt="title"
        class="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-500"
        :src="image"
      />
    </div>
    <div class="flex justify-between items-center px-2">
      <span class="font-display italic text-lg text-brand-charcoal">{{ title }}</span>
      <span class="text-xs text-gray-500 font-sans">{{ year }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'photo'
  }
})
</script>
