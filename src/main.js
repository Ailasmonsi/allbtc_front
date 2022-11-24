// styles
import "./styles/main.scss";
//========================================================================================================================================================
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import name from "@/components/";

const app = createApp(App);

app.use(store).use(router).mount("#app");
