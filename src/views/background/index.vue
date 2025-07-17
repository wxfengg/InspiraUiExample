<script setup lang="ts">
const changeIndex = ref(0);
const changeBackground = () => {
  changeIndex.value++
  if (changeIndex.value === 5) changeIndex.value = 0
}

const buttonText = computed(() => {
  switch (changeIndex.value) {
    case 0: return '极光背景';
    case 1: return '波浪背景';
    case 2: return '粒子背景';
    case 3: return '网格背景';
    case 4: return '灯光背景';
    default: return '更换背景';
  }
});
</script>

<template>
  <div>
    <div class="z-999 fixed top-0 left-0 p-[10px] rounded-2xl">
      <RainbowButton class="text-white" @click="changeBackground"> {{ buttonText }} (点击切换) </RainbowButton>
    </div>

    <!-- 极光背景 -->
    <BgAurora v-if="changeIndex === 0"/>
    
    <!-- 波浪背景 -->
    <BgWavy v-if="changeIndex === 1"/>
    
    <!-- 粒子背景 -->
    <BgVortex v-if="changeIndex === 2"/>

    <!-- 网格背景 -->
    <BgInteractiveGridPattern v-if="changeIndex === 3"/>

    <!-- 灯光背景 -->
    <BgLampEffect v-if="changeIndex === 4"/>
  </div>
</template>