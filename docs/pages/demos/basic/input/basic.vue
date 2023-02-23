<template>
    <mc-input v-model='value' style='width: 200px' placeholder='Place Input'></mc-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref('');
</script>
