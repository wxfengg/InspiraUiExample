<script setup lang="ts">
import { Motion } from "motion-v"
</script>

<template>
  <AuroraBackground>
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
        Hi , XFeng
      </div>
      <div class="py-4 text-base font-extralight md:text-4xl dark:text-neutral-200">
        一起来感受动效带来的舒适感吧。
      </div>
      <InteractiveHoverButton text="首页🚀" @click="$router.push('/')"/>
    </Motion>
  </AuroraBackground>
</template>
