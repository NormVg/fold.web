<template>
  <div class="wave-container">
    <div class="wave-background">
      <!-- Multiple wave layers for depth -->
      <div class="wave-layer wave-1"></div>
      <div class="wave-layer wave-2"></div>
      <div class="wave-layer wave-3"></div>
      <div class="wave-layer wave-4"></div>
      <div class="wave-layer wave-5"></div>
    </div>
  </div>
</template>

<style scoped>
.wave-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wave-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #990000 0%, #7a0000 25%, #4a0404 50%, #2d0202 75%, #1A1A1A 100%);
}

.wave-layer {
  position: absolute;
  width: 200%;
  height: 200%;
  border-radius: 45%;
  left: 50%;
  top: 50%;
  transform-origin: center;
}

.wave-1 {
  background: rgba(26, 26, 26, 0.8);
  transform: translate(-50%, -50%) rotate(0deg);
  animation: wave-spin 12s linear infinite;
}

.wave-2 {
  background: rgba(26, 26, 26, 0.6);
  transform: translate(-50%, -50%) rotate(72deg);
  animation: wave-spin 15s linear infinite reverse;
  border-radius: 40%;
}

.wave-3 {
  background: rgba(26, 26, 26, 0.4);
  transform: translate(-50%, -50%) rotate(144deg);
  animation: wave-spin 18s linear infinite;
  border-radius: 42%;
}

.wave-4 {
  background: rgba(153, 0, 0, 0.3);
  transform: translate(-50%, -50%) rotate(216deg);
  animation: wave-spin 21s linear infinite reverse;
  border-radius: 38%;
  filter: blur(2px);
}

.wave-5 {
  background: rgba(153, 0, 0, 0.2);
  transform: translate(-50%, -50%) rotate(288deg);
  animation: wave-spin 24s linear infinite;
  border-radius: 46%;
  filter: blur(3px);
}

@keyframes wave-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Add flowing gradient overlay */
.wave-background::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
    radial-gradient(circle at 20% 80%, rgba(153, 0, 0, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(153, 0, 0, 0.1) 0%, transparent 50%);
  animation: gradient-flow 8s ease-in-out infinite alternate;
}

@keyframes gradient-flow {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 0.6;
    transform: scale(1.1);
  }
}
</style>
