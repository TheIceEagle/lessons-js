import "reset-css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./main.css";
import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app") ?? document.createElement("div"),
});

export default app;
