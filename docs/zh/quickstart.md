---
title: 快速上手
---

# 快速上手

通过本章节了解安装方法和使用方法

## 安装

### 通过 npm 安装(不支持)

```
npm i vue-component
```

### 通过 git submodule 安装

```
git clone https://github.com/woyehenni/vue-component

npm i vue-component
```

## 引入组件

单页面引入

```
import { VHello } from 'vue-component';

```

全局引入

```
import { createApp } from 'vue';
import { VHello } from 'vue-component';

const app = createApp();
app.use(VHello);
```

## 使用组件

```
<template>
  <v-hello name="world" />
</template>
```
