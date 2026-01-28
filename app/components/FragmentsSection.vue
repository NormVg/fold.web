<template>
  <section class="w-full bg-[#F2EFE5] py-32 px-4 overflow-hidden relative">
    <!-- Section Header -->
    <div class="max-w-6xl mx-auto text-center mb-20 relative z-10">
      <h2 class="font-display text-5xl text-brand-charcoal mb-6">Fragments of Time</h2>
      <p class="font-sans text-brand-charcoal/60 text-lg">Your life, scattered and gathered in one beautiful place.</p>
    </div>

    <!-- Fragments Layout -->
    <div class="relative h-[800px] w-full max-w-7xl mx-auto">
      <!-- Center Text -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 text-center z-20">
        <h3 class="font-display italic text-4xl text-brand-charcoal mb-4">A Year in Review.</h3>
        <p class="font-sans text-sm text-brand-charcoal/70 leading-relaxed">
          From quiet mornings to loud celebrations, every hue of emotion is preserved here.
        </p>
      </div>

      <!-- Floating Memory Cards -->
      <FragmentCard
        v-for="fragment in fragments"
        :key="fragment.id"
        :fragment="fragment"
      />

      <!-- Decorative Arrows -->
      <div class="absolute top-48 left-[28%] hidden md:block opacity-60">
        <svg class="transform rotate-12" fill="none" height="60" stroke="#1A1A1A" stroke-width="2" viewBox="0 0 100 100" width="60">
          <path d="M10,10 Q50,50 90,30"></path>
          <path d="M80,25 L90,30 L85,40"></path>
        </svg>
        <span class="handwritten text-sm absolute top-0 left-10 w-32">Roadtrip to Torino</span>
      </div>

      <div class="absolute top-40 right-[25%] hidden md:block opacity-60">
        <svg class="transform -rotate-45" fill="none" height="50" stroke="#1A1A1A" stroke-width="2" viewBox="0 0 100 100" width="50">
          <path d="M90,90 Q50,50 10,90"></path>
          <path d="M20,95 L10,90 L20,80"></path>
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
const fragments = [
  {
    id: 1,
    type: 'photo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsO9PBJq-rawCrqnbiCDSYInmiGU5tDsS8x_DV7tCRUGv6YO2ulVBeT6K0pAvkTG9l5F79DPIY-WMxKyzZ8bje5iY7D5PjDVWZaKt3HarlezLiNamr68WOQt-eGBStJOUCzk7shDIIbe613We2NTZ8nyTozz1B9R1burhWTDahxFGR_708W8O16W7P3EWqKx60qh94HHOKpsaXcOJfoe4bg0Ogkxit5uzmZ0Q1KYnVrdKt77szt_MXhhGA9mHcJmekmHO55ifbmedE',
    caption: 'Lakes at 6 in the morning',
    position: 'top-10 left-[10%]',
    size: 'w-48 md:w-64',
    rotation: '-rotate-6',
    animation: 'animate-float'
  },
  {
    id: 2,
    type: 'photo',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkKfPZbKw9jsF56te46xtH43QhONGx6FaYjs9UoH0fvfG-hgZZQLwFQaXE5YarIWCt_KfJRvA1n-PwmfHIZMM6DUh5u-G0Q_N2XxriMq2YPU6Zcq9CQHN1vdaZq-Bwbu3wSE6YIysu3BVVxjylUyE91gM4dK8GCQeMrENagfrgKQoH_Vitt6l39YQf-aM-Xo8bEwUUI8r0RGOR5bTvPGJ9TxIUv9ZoV2FQEx_8qo65rydh83gX4FUKAcbCsLMmtuDc_juEBN0FYN8K',
    caption: "Last year's trip",
    position: 'bottom-20 right-[15%]',
    size: 'w-56',
    rotation: 'rotate-3',
    animation: 'animate-float-delayed',
    hasSticker: true
  },
  {
    id: 3,
    type: 'note',
    text: "Walking into something new feels like...",
    position: 'top-24 right-[10%]',
    size: 'w-48',
    rotation: 'rotate-2'
  },
  {
    id: 4,
    type: 'date',
    day: '24',
    month: 'October',
    note: 'A rainy Tuesday',
    position: 'bottom-32 left-[15%]',
    size: 'w-52',
    rotation: '-rotate-3'
  }
]
</script>
