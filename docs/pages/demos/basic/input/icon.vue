<template>
    <div class="demo-input-suffix">
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">使用 属性设置</span>
            <mc-input
                v-model="value1"
                :prefix-icon="Search"
                placeholder="Type Something"
                style="width: 200px"
                class="w-50 m-2"
            ></mc-input>
            <mc-input
                v-model="value2"
                :suffix-icon="Calendar"
                placeholder="Type Something"
                style="width: 200px"
                class="w-50 m-2"
            ></mc-input>
        </el-row>
        <el-row :gutter="20">
            <span class="ml-3 w-35 text-gray-600 inline-flex items-center">使用 slot设置</span>
            <mc-input v-model="value3" placeholder="Type Something" style="width: 200px" class="w-50 m-2">
                <template #prefix>
                    <el-icon class="el-input__icon"><calendar /></el-icon>
                </template>
            </mc-input>
            <mc-input v-model="value4" placeholder="Type Something" style="width: 200px" class="w-50 m-2">
                <template #suffix>
                    <el-icon class="el-input__icon"><calendar /></el-icon>
                </template>
            </mc-input>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search, Calendar } from '@element-plus/icons-vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
</script>
