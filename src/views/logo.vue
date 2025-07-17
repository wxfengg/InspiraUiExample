<script lang="ts" setup>
const imageUrl = "https://cdn.inspira-ui.com/images/apple-logo.svg";
import logo1Img from '@/assets/logo.png';
import miniImg from '@/assets/小程序logo.svg';
import logo2Img from '@/assets/LOGO.svg';
import f from '@/assets/f.svg';
</script>

<template>
  <div class="flex h-[100vh] w-full items-center justify-center bg-[#222]">
    <LiquidLogo 
      :image-url="f" 
      :refraction="0.005" 
      :liquid="0.07" 
      :speed="0.35" 
      :pattern-scale="2"
      :pattern-blur="0.005"
      class="h-96"
    />
  </div>
</template>

<style lang="scss" scoped></style>
