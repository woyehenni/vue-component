<template>
  <div class="flex gap-2 items-center justify-center bg-black py-2">
    <button
      v-for="(item, index) in platforms"
      :key="index"
      @click="device = item.name"
      class="px-2 py-1 text-white rounded"
      :class="{
        'bg-indigo-600': device == item.name
      }"
    >
      <Icon width="32px" :icon="item.icon" />
    </button>
    <div class="flex-none absolute right-5">
      <div class="flex items-center gap-5">
        <Switch v-model="darkMode" v-slot="{ checked }">
          <button
            class="relative inline-flex h-6 w-11 items-center rounded-full"
            :class="checked ? 'bg-gray-600' : 'bg-gray-200'"
          >
            <Icon
              :icon="checked ? 'ion:moon-outline' : 'ion:sunny-outline'"
              :class="checked ? 'translate-x-6 bg-black text-white' : 'translate-x-1'"
              class="inline-block h-5 w-5 transform rounded-full transition"
            />
            <!-- <span
              :class="checked ? 'translate-x-6' : 'translate-x-1'"
              class="inline-block h-4 w-4 transform rounded-full bg-white transition"
            /> -->
          </button>
        </Switch>
      </div>
    </div>
  </div>
  <div class="flex justify-center pt-1">
    <div
      class="grow"
      :class="{
        'max-w-screen-sm': device == 'phone',
        'max-w-screen-lg': device == 'tablet',
        'max-w-screen-max-w-full': device == 'desktop'
      }"
    >
      <component :is="layout">
        <slot />
      </component>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { Switch } from '@headlessui/vue'
import { Icon } from '@iconify/vue'

import DesktopLayout from './devices/DesktopLayout.vue'
import PhoneLayout from './devices/PhoneLayout.vue'
import TabletLayout from './devices/TabletLayout.vue'

const darkMode = ref(false)
const device = ref('phone')
const layout = computed(() => platforms.find(platform => platform.name === device.value)?.layout)

const platforms = [
  {
    name: 'phone',
    icon: 'ion:iphone',
    layout: PhoneLayout
  },
  {
    name: 'tablet',
    icon: 'ion:ios-tablet-landscape',
    layout: TabletLayout
  },
  {
    name: 'desktop',
    icon: 'ion:desktop-outline',
    layout: DesktopLayout
  }
]

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme == 'dark') {
    darkMode.value = true
  }
})

watch(
  () => darkMode.value,
  () => {
    const html = document.documentElement
    if (darkMode.value) {
      html.classList.remove('theme-default')
      html.classList.add('theme-dark')
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('theme-dark')
      html.classList.add('theme-default')
      localStorage.setItem('theme', 'default')
    }
  }
)
</script>

<style scoped></style>
