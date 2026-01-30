<template>
  <section class="wave-wrapper">
    <div class="wave-background">
      <span class="wave-layer wave-layer-1"></span>
      <span class="wave-layer wave-layer-2"></span>
      <span class="wave-layer wave-layer-3"></span>
    </div>
  </section>
</template>

<style scoped>
.wave-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wave-background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #8D1A1A 0%, #810100 50%, #5a0000 100%);
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
  transition: 0.5s;
}

.wave-layer {
  content: "";
  position: absolute;
  width: 200vmax;
  height: 200vmax;
  top: -5%;
  left: 50%;
  transform: translate(-50%, -60%);
  background: #000;
}

.wave-layer-1 {
  border-radius: 45%;
  background: rgba(24, 23, 23, 1);
  animation: wave-animate 5s linear infinite;
}

.wave-layer-2 {
  border-radius: 40%;
  background: rgba(24, 23, 23, 0.5);
  animation: wave-animate 10s linear infinite;
}

.wave-layer-3 {
  border-radius: 42.5%;
  background: rgba(24, 23, 23, 0.5);
  animation: wave-animate 15s linear infinite;
}

@keyframes wave-animate {
  0% {
    transform: translate(-50%, -60%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}

/* Tablet and smaller desktops */
@media (max-width: 1024px) {
  .wave-layer {
    top: -10%;
    transform: translate(-50%, -65%);
  }
  @keyframes wave-animate {
    0% {
      transform: translate(-50%, -65%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -65%) rotate(360deg);
    }
  }
}

/* Mobile: Adjust top position to bring waves higher */
@media (max-width: 768px) {
  .wave-layer {
    top: -15%;
    transform: translate(-50%, -60%);
  }
  @keyframes wave-animate {
    0% {
      transform: translate(-50%, -60%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -60%) rotate(360deg);
    }
  }
}

/* Extra small phones: Even higher */
@media (max-width: 480px) {
  .wave-layer {
    top: -20%;
    transform: translate(-50%, -55%);
  }
  @keyframes wave-animate {
    0% {
      transform: translate(-50%, -55%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -55%) rotate(360deg);
    }
  }
}
</style>

