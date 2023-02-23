<template>
    <slot></slot>
</template>

<script lang="ts" setup>
import { useElementPlusTheme } from "../../../hooks/useElementPlusTheme";
import { PropType, onMounted } from "vue";

interface themeConfigType {
    [key: string]: ColorGamut;
}
const props = defineProps({
    themeConfig: {
        type: Object as PropType<themeConfigType>,
        default: () => {
            return {
                white: "#0CB1A1",
                teal: "#008b8b",
                blue: "#418bca",
                black: "#5a98d6",
            };
        },
    },
});

const { changeTheme } = useElementPlusTheme("");

onMounted(() => {
    const observer = new MutationObserver((mutations: any) => {
        const className: DOMTokenList = mutations[0].target.classList;
        let thisClass = '';
        Object.keys(props.themeConfig).forEach(key => {
            if(className.contains(key)) {
                changeTheme(props.themeConfig[key])
            }
        })
    })
    observer.observe(document.body, {attributes: true}) // 监听元素属性变化
});
</script>
