<template>
    <el-button class="mc-button" @click="$emit('click', $event)">
        <slot>测试组件</slot>
    </el-button>
</template>

<script lang="ts" setup>
defineEmits(["click"]);

</script>

<style scoped lang="less">

</style>
