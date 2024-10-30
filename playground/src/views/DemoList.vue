<template>
  <div>Demo List</div>
  <ul>
    <li v-for="(route, index) in routes" :key="index" @click="onClick(route)">{{ route.name }}</li>
  </ul>
</template>
<script lang="ts" setup>
import { RouteRecordRaw, useRouter } from 'vue-router'

import { makeRoutes } from '../router/routes'

const routes = makeRoutes()
const router = useRouter()

function onClick(route: RouteRecordRaw) {
  router.push(route.path)
}
</script>
