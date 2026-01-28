<template>
  <section class="w-full bg-[#F2EFE5] py-24 px-6 md:px-12 lg:px-24">
    <!-- Section Header -->
    <div class="max-w-7xl mx-auto mb-16 text-center">
      <h2 class="font-display text-4xl md:text-5xl lg:text-6xl text-brand-charcoal mb-6">
        Reconnect with your past
      </h2>
      <p class="font-sans text-brand-charcoal/70 text-lg max-w-2xl mx-auto">
        Experiences that weave together community, memory, and identity. A digital home for your most precious artifacts.
      </p>
    </div>

    <!-- Memory Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto items-center">
      <!-- Left Column -->
      <div class="flex flex-col gap-8 md:mt-24">
        <MemoryCard
          :image="memoryItems.studio.image"
          :title="memoryItems.studio.title"
          :year="memoryItems.studio.year"
          type="photo"
        />
        <VoiceNoteCard />
      </div>

      <!-- Center Column -->
      <div class="flex flex-col gap-8">
        <QuoteCard
          :quote="memoryItems.quote.text"
          :author="memoryItems.quote.author"
          :entry="memoryItems.quote.entry"
        />
      </div>

      <!-- Right Column -->
      <div class="flex flex-col gap-8 md:mt-12">
        <ReflectionCard />
        <PortraitCard :image="memoryItems.portrait.image" />
      </div>
    </div>
  </section>
</template>

<script setup>
const memoryItems = {
  studio: {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCwO1F65PFohgW3rR-MEt0sar_bAC2s-xE47KpldKRD6ejnh3DPfMQrTA2rfxS4abxE1oOsCaa9pcAI1TglFGtdstV9HaOr60gFHnQQhVVt2m3yvSh_AtjRDWDIlIY8irD3WyfifZWevMJyuBFvVae9zCmdfQYg2KedmaEmYk3oJVjSKKPJp5G687apXJ4_HwloJs8oN7DHhliJ0ApZIp5qAiR35ceYUwQPfj2lBZV-sbkjGWeXZSGMC5ZAg3Bk8h6xRkCZ5emJMhM",
    title: "The old studio",
    year: "1984"
  },
  quote: {
    text: "It was a Tuesday when the rain finally stopped, and we realized the garden had bloomed while we weren't looking.",
    author: "M",
    entry: "Journal Entry #42"
  },
  portrait: {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb3NhJWSbxbfwcVsq7aWiv7DdazqyI5xCDSHLGXPgT1wpnJGbYVoJGONRKz8_lXs5OoGiu5zB7Wx-OBJCBf1LOUADzE_QIiNIcutMNxhMp9ghILo6c4RWDWvYvLZcb7XE8y6JhWWhNmCi-6M_hXRL-H8DvJ_hncUwr6UK6AxlTc_Gdl7bo_BXDwKk81wR8cPhCrEslfrTIvua4_RBrjuxmQZDFtx19syisWl5CHZEB4rVKnX5NU4Wt-hN_UvpVCIuT5qlypwpujPaj"
  }
}
</script>
