<template>
  <div
    class="relative mx-auto border-gray-800 dark:border-gray-300 bg-gray-800 border-[14px] rounded-[2.5rem] h-[736px] w-[414px]"
    :style="`width: ${width}px; height: ${height}px;`"
  >
    <div class="h-[3px] w-[32px] bg-gray-800 dark:bg-gray-300 absolute end-[72px] -top-[17px] rounded-s-lg"></div>
    <div class="h-[3px] w-[46px] bg-gray-800 dark:bg-gray-300 absolute end-[124px] -top-[17px] rounded-s-lg"></div>
    <div class="h-[3px] w-[46px] bg-gray-800 dark:bg-gray-300 absolute end-[178px] -top-[17px] rounded-s-lg"></div>
    <div class="h-[3px] w-[64px] bg-gray-800 dark:bg-gray-300 absolute end-[142px] -bottom-[17px] rounded-e-lg"></div>
    <div
      class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-300"
      :style="`width: ${width - 28}px; height: ${height - 28}px;`"
    >
      <v-page>
        <slot />
      </v-page>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    width?: number
    height?: number
  }>(),
  {
    width: 1080,
    height: 736
  }
)
</script>

<style lang="scss" scoped>
:deep(.v-page) {
  height: 100%;
  overflow: hidden;

  .v-page__contents {
    height: 100%;
  }
}
:root {
  &.theme-dark {
    .bg-gray-800 {
      background-color: rgb(209 213 219);
    }
    .border-gray-800 {
      border-color: rgb(209 213 219);
    }
  }
}
</style>
