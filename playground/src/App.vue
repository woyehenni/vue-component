<template>
  <div class="view">
    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'

import DefaultLayout from './components/DefaultLayout.vue'
</script>
