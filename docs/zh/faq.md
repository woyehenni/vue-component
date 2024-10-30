---
title: 常见问题
---

# 常见问题

## 主题定制

## 覆盖默认样式


```vue:line-numbers {2,8,13}
<template>
  <v-hello>hello world</v-hello>
</template>

<style>
  ::deep(.v-hello) {
    color: red;
  }
</style>
```
