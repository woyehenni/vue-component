<template>
  <div class="flex items-center theme-container">
    <Menu v-slot="{ open }" as="div" class="relative inline-block">
      <MenuButton
        ref="trigger"
        as="div"
        role="button"
        class="inline-flex w-full justify-center items-center rounded-md px-4 py-2 theme-button"
      >
        Theme
        <span class="vpi-chevron-down text-icon"></span>
      </MenuButton>
      <div v-show="open">
        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            as="div"
            class="relative md:absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            ><div class="px-1 py-1">
              <MenuItem
                v-slot="{ active }"
                v-for="(item, index) of items"
                :key="index"
                :disabled="currentTheme === item.text"
              >
                <button
                  @click="onClick(item)"
                  :class="[
                    active ? 'bg-violet-500 text-white' : 'text-gray-900',

                    'group flex w-full items-center rounded-md px-2 py-2 mb-1 last:mb-0 text-sm'
                  ]"
                  :style="[
                    item.color ? `background-color: ${item.color}` : '',
                    currentTheme === item.text ? 'cursor: default' : 'cursor: pointer;'
                  ]"
                >
                  {{ item.text }}
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </div>
    </Menu>
  </div>
</template>
<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { onMounted, ref } from 'vue'

const items = [
  {
    text: 'AAA',
    color: '#000'
  },
  {
    text: 'BBB',
    color: '#FFF'
  },
  {
    text: 'CCC',
    color: '#DDD'
  }
]

const currentTheme = ref('')

onMounted(() => {
  const theme = localStorage.getItem('theme')
  if (theme) {
    currentTheme.value = theme
    const html = document.documentElement
    html.classList.add(`theme-${theme}`)
  }
})

function onClick(item) {
  currentTheme.value = item.text
  localStorage.setItem('theme', item.text)
  const html = document.documentElement
  html.classList.forEach(function (value) {
    if (value.includes('theme')) {
      html.classList.remove(value)
    }
  })
  html.classList.add(`theme-${currentTheme.value}`)
}
</script>
<style lang="scss" scoped>
.theme-container {
  display: flex;
  align-items: center;
}
.theme-button {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  .text-icon {
    font-size: 14px;
    margin-left: 4px;
  }
}
</style>
