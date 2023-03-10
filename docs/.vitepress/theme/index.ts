// @ts-ignore
import theme from "vitepress/dist/client/theme-default/index";
import { AntDesignContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import McComponent from "../../../packages";
import '../../public/style.css';

export default {
    ...theme,
    enhanceApp({ app }: any) {
        app.use(McComponent);
        app.component("demo-preview", AntDesignContainer);
    },
};
