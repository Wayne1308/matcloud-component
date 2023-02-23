<template>
    <el-button @click='changeTheme'>changeTheme</el-button>
    <mc-theme></mc-theme>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');

const changeTheme = () => {
    const theme = ['white', 'blue', 'black', 'teal']
    document.body.className = theme[Math.floor(Math.random() * 4)] ;
}
</script>
