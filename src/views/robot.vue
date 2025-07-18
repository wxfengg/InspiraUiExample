<script setup lang="ts">
const sceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

const go = (type: string) => {
  if(type === 'blogs') window.open('https://wxfengg.github.io/xfeng-blog/', '_blank')
  if (type === 'github') window.open('https://github.com/wxfengg', '_blank')
}
</script>

<template>
  <div class="relative w-full overflow-hidden bg-black/[0.96]">
    <div
      class="absolute flex w-full flex-col items-center justify-center gap-2 p-8 text-center font-heading text-white">
      <span class="text-4xl font-semibold"> Hi , XFeng </span>
      <span class="font-sans font-light">这是一个有趣的机器人，会看向你鼠标的方向。</span>

    </div>
    <div class="flex relative">
      <ShimmerButton class="not-last:mr-10 absolute top-[135px] left-[31%]" shimmer-size="2px" background="#333"
        @click="$router.push('/bg')">
        <span
          class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
          背景案例
        </span>
      </ShimmerButton>

      <ShimmerButton class="not-last:mr-10 absolute top-[135px] left-[41%]" shimmer-size="2px" background="#333"
        shimmer-color="#fff" @click="$router.push('/logo')">
        <span
          class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
          液态Logo
        </span>
      </ShimmerButton>

      <ShimmerButton class="not-last:mr-10 absolute top-[135px] left-[51%]" shimmer-size="2px" background="#333"
        @click="go('blogs')">
        <span
          class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
          我的博客
        </span>
      </ShimmerButton>

      <ShimmerButton class="not-last:mr-10 absolute top-[135px] left-[61%]" shimmer-size="2px" background="#333"
        shimmer-color="#fff" @click="go('github')">
        <span
          class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg dark:from-white dark:to-slate-900/10">
          GitHub
        </span>
      </ShimmerButton>
    </div>
    <Spline :scene="sceneUrl" class="mt-24 size-full" />
  </div>
</template>

<style lang="scss" scoped></style>
