import { defineConfig } from "vite";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import buildPlugin from './build/vite-build-plugin';
import dts from 'vite-plugin-dts';
import ElementPlus from 'unplugin-element-plus/vite'

function pathResolve(dir: string) {
    return resolve(process.cwd(), ".", dir);
}

export default defineConfig({
    // 路径重定向
    resolve: {
        alias: [
            {
                find: "docs/*",
                replacement: pathResolve("./docs/*"),
            },
            {
                find: "matcloud-component",
                replacement: pathResolve("packages"),
            },
        ],
        dedupe: ["vue"],
    },
    build: {
        lib: {
            entry: pathResolve("packages/index.ts"), // 设置入口文件
            name: "matcloud-component", // 起个名字，安装、引入用
            fileName: (format) => `matcloud-component.${format}.js`, // 打包后的文件名
        },
        sourcemap: true, // 输出.map文件
        rollupOptions: {
            external: ["vue"], // 不想打进包的库
            output: {
                globals: {
                    vue: "Vue", // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                },
            },
        },
    },
    css: {
        // 这里引入样式文件
        preprocessorOptions: {
            scss: {
                // additionalData: `@use "@/scss/element-plus/index.scss" as *;`,
            },
        },
    },
    plugins: [
        vue(),
        vueJsx(),
        dts({
            entryRoot: pathResolve("packages"),
            outputDir: pathResolve("types"),
        }),
        buildPlugin(),
        ElementPlus({
            useSource: true,
        }),
    ]
});
