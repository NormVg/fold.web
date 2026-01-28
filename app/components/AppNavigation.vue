<template>
  <nav class="flex items-center justify-between w-full">
    <!-- Logo -->
    <div class="flex items-center gap-2">
      <AppLogo />
      <span class="font-display italic text-2xl tracking-wide font-medium">Fold.tao</span>
    </div>

    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide font-medium text-brand-cream/80">
      <a
        v-for="item in navigationItems"
        :key="item.name"
        class="hover:text-white transition-colors"
        :href="item.href"
      >
        {{ item.name }}
      </a>
    </div>

    <!-- CTA Button -->
    <a
      class="glass-button-primary px-6 py-2 rounded-full font-sans text-sm font-medium hover:scale-105 transition-transform shadow-lg"
      href="#join"
    >
      Access Waitlist
    </a>
  </nav>
</template>

<script setup>
const navigationItems = [
  { name: 'Manifesto', href: '#' },
  { name: 'Origins', href: '#' },
  { name: 'FAQ', href: '#' }
]
</script>
