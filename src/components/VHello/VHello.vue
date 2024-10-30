<template>
  <div>
    Hello, this is <mark class="v-hello">{{ name }}</mark>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import './VHello.scss'

const props = defineProps<{ name?: string }>()
const name = props.name || ref<string>('VHello Component')
</script>
