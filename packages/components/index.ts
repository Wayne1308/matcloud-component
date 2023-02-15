import { Component } from "vue";

const Components: {
    [propName: string]: Component;
} = {};

const componentList = import.meta.glob("./**/**", { eager: true });

Object.entries(componentList).forEach((com: any) => {
    const [name, component] = com;
    if (typeof name === "string" && name.includes("index.ts")) {
        Object.entries(component).forEach((element: any) => {
            const [_key, _com] = element;
            Components[_key] = _com;
        });
    }
});

export default Components;
