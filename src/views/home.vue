<script setup lang="ts">
import { Motion } from "motion-v";

const msg = ref('XFeng');
const description = ref('这是一个简单的playground，关于炫酷的Vue3背景组件和特效。');
const btnFlag = ref(0);
const changeBackground = () => {
  btnFlag.value++
  if (btnFlag.value === 5) btnFlag.value = 0
}
</script>

<template>
  <div class="z-999 fixed top-0 left-0 p-[10px] rounded-2xl">
    <RainbowButton class="text-white" @click="changeBackground"> 更换背景 </RainbowButton>
  </div>
  <WavyBackground class="mx-auto max-w-4xl flex size-full flex-col items-center justify-center" v-if="btnFlag === 0">
    <p class="inter-var text-center text-2xl font-bold text-white lg:text-7xl md:text-4xl">
      {{ msg }}
    </p>
    <p class="inter-var mt-4 text-center text-base font-normal text-white md:text-lg  mb-[20px]">
      {{ description }}
    </p>
    <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <button
          class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          快速开始
        </button>
        <button
          class="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
        >
          联系我们
        </button>
      </div>
  </WavyBackground>

  <div class="mx-auto h-[100vh] overflow-hidden" v-if="btnFlag === 1">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <h2 class="text-center text-2xl font-bold text-white md:text-6xl">{{ msg }}</h2>
      <p class="mt-6 max-w-3xl text-center text-sm text-white md:text-2xl">
        {{ description }}
      </p>
      <div class="mt-6 flex flex-col items-center gap-4 sm:flex-row">
        <button
          class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          快速开始
        </button>
        <button
          class="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
        >
          联系我们
        </button>
      </div>
    </Vortex>
  </div>

  <AuroraBackground v-if="btnFlag === 2">
    <Motion
      as="div"
      :initial="{ opacity: 0, y: 40, filter: 'blur(10px)' }"
      :while-in-view="{
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
      }"
      :transition="{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut',
      }"
      class="relative flex flex-col items-center justify-center gap-4 px-4"
    >
      <div class="text-center text-3xl font-bold md:text-7xl dark:text-white">
        Background lights are cool you know.
      </div>
      <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
        And this, is chemical burn.
      </div>
      <button
        class="w-fit rounded-full bg-black px-4 py-2 text-white dark:bg-white dark:text-black cursor-pointer"
      >
        了解它
      </button>
    </Motion>
  </AuroraBackground>

  <div class="relative grid h-[100vh] place-content-center overflow-hidden" v-if="btnFlag === 3">
    <p
      class="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white"
    >
      Hi , XFeng
    </p>

    <InteractiveGridPattern
      :class="'[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]'"
      :width="30"
      :height="30"
      :squares="[80, 80]"
      squares-class-name="hover:fill-blue-500"
    />
  </div>

  <LampEffect v-if="btnFlag === 4">
    <span class="font-heading text-6xl text-white"> Hi , XFeng </span>
  </LampEffect>
</template>

<style scoped></style>
