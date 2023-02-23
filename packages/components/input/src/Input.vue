<template>
    <el-input class="mc-input" :prefix-icon="prefixIcon" :suffix-icon="suffixIcon">
        <template #prefix v-if="useSlots().prefix">
            <slot name="prefix"></slot>
        </template>
        <template #suffix v-if="useSlots().suffix">
            <slot name="suffix"></slot>
        </template>
        <template #prepend v-if="useSlots().prepend">
            <slot name="prepend"></slot>
        </template>
        <template #append v-if="useSlots().append">
            <slot name="append"></slot>
        </template>
    </el-input>
</template>

<script lang="ts" setup>
import { defineProps, useSlots } from 'vue'
import { Search } from '@element-plus/icons-vue'
const props = defineProps({
    prefixIcon: {
        default: ''
    },
    suffixIcon: {
        default: ''
    }
})
</script>
<style lang="scss">
.mc-input.el-input, .mc-input.el-input.is-disabled {
    --el-input-focus-border-color: transparent !important;

    .el-input__wrapper {
        position: relative;
        padding: 0;
        box-shadow: none;

        &:hover,
        &:focus-visible,
        &:active,
        &:focus {
            box-shadow: none;
        }

        .el-input__prefix {
            position: absolute;
        }
        .el-input__suffix {
            position: absolute;
        }

        .el-input__icon {
            height: 1em;
            width: 1em;
        }
    }

    &.el-input--prefix {
        .el-input__prefix {
            left: 0;
        }
        input {
            padding-left: 20px;
        }
    }
    &.el-input--suffix {
        .el-input__suffix {
            right: 0;
        }
        input {
            padding-right: 20px;
        }
    }

    input {
        border: 0;
        color: #575a64;
        box-shadow: 0 -1px 0 0 rgb(0 139 139 / 60%) inset;
        outline: none;
        border-radius: 0;
        font-size: 12px;
        box-sizing: content-box;
        height: 24px;
        line-height: 1;
        background: transparent;
        font-family: 'Open Sans', Arial, sans-serif;
    }
}
</style>
