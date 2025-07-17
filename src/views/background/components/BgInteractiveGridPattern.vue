<script setup lang="ts"></script>

<template>
  <div class="relative grid h-[100vh] place-content-center overflow-hidden">
    <p
      class="z-10 whitespace-pre-wrap text-center text-7xl font-medium tracking-tighter text-black dark:text-white"
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
</template>

<style lang="scss" scoped></style>
