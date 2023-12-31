// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import { Documate } from "@documate/vue";
import "@documate/vue/dist/style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // TODO: Finish Documate integration for AI chatbot with OpenAI https://documate.site/integration/vitepress
      "nav-bar-content-before": () =>
        h(Documate, {
          endpoint: "https://z2adrrpr42.us.aircode.run/ask",
        }),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
