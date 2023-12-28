import "reset-css";
import '@fontsource/space-mono';
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app') || document.createElement("div"),
})

export default app
