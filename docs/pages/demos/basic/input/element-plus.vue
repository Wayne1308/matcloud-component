<template>
    <!-- 禁用 -->
    <div class="w-100% mb-4">
        <span class="ml-3 w-35 inline-flex items-center">禁用</span>
        <mc-input
            v-model="value1"
            disabled
            placeholder="Type Something"
            style="width: 200px"
        ></mc-input>
    </div>
    <!-- 一键清空 -->
    <div  class="w-100% mb-4">
        <span class="ml-3 w-35 inline-flex items-center">一键清空</span>
        <mc-input
            v-model="value2"
            clearable
            placeholder="输入清除"
            style="width: 200px"
        ></mc-input>
    </div>
    <!-- 格式化 -->
    <div  class="w-100% mb-4">
        <span class="ml-3 w-35 inline-flex items-center">格式化</span>
        <mc-input
            v-model="value3"
            :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
            placeholder="Type Something"
            style="width: 200px"
        ></mc-input>
    </div>
    <!-- 密码 -->
    <div  class="w-100% mb-4">
        <span class="ml-3 w-35 inline-flex items-center">密码</span>
        <mc-input
            v-model="value4"
            type="password"
            placeholder="请输入密码"
            style="width: 200px"
        ></mc-input>
    </div>
    <!-- 更多 -->
    <div  class="w-100% mb-4">
        <span class="ml-3 w-35 inline-flex items-center">更多。。。。。。</span>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');
</script>
