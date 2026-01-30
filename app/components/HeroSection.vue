<template>
  <main class="relative w-full h-full rounded-[30px] md:rounded-[48px] overflow-hidden shadow-2xl group isolate bg-background-dark">
    <!-- Wave Animation Background -->
    <div class="absolute inset-0 w-full h-full z-0">
      <WaveAnimationSimple />
      <!-- Lighter overlay gradients optimized for your color theme -->
      <div class="absolute inset-0 bg-gradient-to-b from-[#181717]/15 via-transparent to-[#181717]/25 mix-blend-multiply"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-[#810100]/15 via-transparent to-transparent mix-blend-overlay"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col h-full w-full p-4 md:p-10 lg:p-12 text-brand-cream">
      <!-- Navigation -->
      <div class="flex-shrink-0">
        <AppNavigation />
      </div>

      <!-- Hero Content -->
      <section class="flex-1 flex flex-col items-center justify-center text-center max-w-5xl mx-auto space-y-3 md:space-y-6">
        <h1 class="font-display italic text-[2.5rem] md:text-8xl lg:text-9xl leading-tight text-brand-cream drop-shadow-lg">
          {{ heroTitle }}
        </h1>
        <p class="font-sans font-light text-sm md:text-xl lg:text-2xl text-brand-cream/90 max-w-2xl leading-relaxed drop-shadow-md px-2">
          {{ heroDescription }}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-2 md:gap-4 pt-1 md:pt-4 w-full justify-center">
          <button
            v-for="action in heroActions"
            :key="action.text"
            class="glass-button px-5 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium min-w-[140px] md:min-w-[180px]"
            @click="action.onClick"
          >
            {{ action.text }}
          </button>
        </div>
      </section>

      <!-- Email Signup Form -->
      <div class="flex-shrink-0 w-full flex flex-col items-center pb-1 md:pb-4">
        <div class="w-full max-w-xl mx-auto">
          <HeroEmailForm />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const heroTitle = "Unfold Your Story"
const heroDescription = "Fold is a private sanctuary for your memories. Capture the unspoken emotions and fleeting moments in a digital tapestry woven from your life."

const heroActions = [
  {
    text: "Watch the Film",
    onClick: () => {
      // Handle watch film action
      console.log("Watch film clicked")
    }
  },
  {
    text: "Read Our Story",
    onClick: () => {
      // Handle read story action
      console.log("Read story clicked")
    }
  }
]
</script>
