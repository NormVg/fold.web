<template>
  <section class="w-full bg-brand-charcoal py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <!-- Process Steps -->
      <div class="space-y-16">
        <h2 class="font-display italic text-5xl text-brand-cream mb-12">The Process of Being</h2>

        <ProcessStep
          v-for="step in processSteps"
          :key="step.number"
          :number="step.number"
          :title="step.title"
          :description="step.description"
        />
      </div>

      <!-- Visual Element -->
      <div class="relative h-[600px] w-full flex items-center justify-center">
        <div class="absolute w-[400px] h-[400px] rounded-full aura-glow opacity-80 animate-pulse"></div>
        <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-brand-cream to-[#d4d1c5] shadow-[0_0_60px_rgba(242,239,229,0.2)] flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay"></div>
          <div class="w-full h-full bg-gradient-to-t from-brand-red/80 to-transparent opacity-60 mix-blend-multiply rounded-full scale-110 blur-2xl transform translate-y-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "Unearth the hidden patterns in your daily life through gentle prompts."
  },
  {
    number: "02",
    title: "Capture",
    description: "Record moments instantly—voice, text, or image—before they fade."
  },
  {
    number: "03",
    title: "Reflect",
    description: "Look back on your tapestry and understand your emotional journey."
  }
]
</script>
