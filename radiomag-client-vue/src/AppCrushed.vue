<script setup lang="ts">
import { ElEmpty, ElButton } from "element-plus";
import "element-plus/es/components/empty/style/css";
import "element-plus/es/components/button/style/css";

const refresh = () => window.location.reload();
</script>

<template>
  <el-empty description="Сталася помилка | An error occurred" :image-size="286">
    <el-button plain size="large" type="primary" @click="refresh"
      >Оновити сторінку | Refresh the page</el-button
    >
  </el-empty>
</template>
