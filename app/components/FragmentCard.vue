<template>
  <div
    class="absolute z-10"
    :class="[fragment.position, fragment.size, fragment.rotation, fragment.animation]"
  >
    <!-- Photo Fragment -->
    <div
      v-if="fragment.type === 'photo'"
      class="bg-white p-2 md:p-3 rounded-lg shadow-xl transition-transform duration-300 hover:rotate-0"
    >
      <img
        :alt="fragment.caption"
        class="w-full object-cover rounded mb-2 filter sepia-[0.3]"
        :class="fragment.id === 1 ? 'aspect-[3/4]' : 'aspect-video contrast-125'"
        :src="fragment.image"
      />
      <p class="font-sans text-xs text-center text-gray-500 py-1">{{ fragment.caption }}</p>

      <!-- Sticker for second photo -->
      <div
        v-if="fragment.hasSticker"
        class="absolute -bottom-4 right-4 bg-yellow-100 px-3 py-1 shadow-sm transform rotate-2"
      >
        <span class="handwritten text-xs text-brand-charcoal">{{ fragment.caption }}</span>
      </div>
    </div>

    <!-- Note Fragment -->
    <div
      v-else-if="fragment.type === 'note'"
      class="bg-[#fffdf5] p-4 shadow-md border border-gray-100"
    >
      <p class="handwritten text-brand-charcoal text-sm leading-relaxed">
        "{{ fragment.text }}"
      </p>
    </div>

    <!-- Date Fragment -->
    <div
      v-else-if="fragment.type === 'date'"
      class="bg-brand-charcoal text-brand-cream p-6 rounded-2xl shadow-2xl"
    >
      <span class="text-4xl block mb-2 font-display">{{ fragment.day }}</span>
      <span class="text-sm font-sans uppercase tracking-widest opacity-70">{{ fragment.month }}</span>
      <hr class="border-brand-cream/20 my-3"/>
      <p class="font-display italic text-lg">{{ fragment.note }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  fragment: {
    type: Object,
    required: true
  }
})
</script>
