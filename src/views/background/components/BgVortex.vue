<script setup lang="ts"></script>

<template>
  <div class="mx-auto h-[100vh] overflow-hidden">
    <Vortex
      background-color="black"
      class="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
    >
      <h2 class="text-center text-2xl font-bold text-white md:text-6xl"> Hi , XFeng </h2>
      <p class="mt-6 max-w-3xl text-center text-sm text-white md:text-2xl mb-10">
        一起来感受动效带来的舒适感吧。
      </p>
      <InteractiveHoverButton text="首页🚀" @click="$router.push('/')"/>
    </Vortex>
  </div>
</template>

<style lang="scss" scoped></style>
