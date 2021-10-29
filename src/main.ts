import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import api from './service/index';
import { showToast } from './utils/index';
import request, { checkResponse } from './utils/request';
// import BasePage from './components/BasePage/index.vue';
import AuthorizePopup from './components/AuthorizePopup/index.vue';
const app = createApp(App);

app.config.globalProperties.$get = request.get;
app.config.globalProperties.$post = request.post;
app.config.globalProperties.$checkResponse = checkResponse;
app.config.globalProperties.$api = api;
app.config.globalProperties.$showToast = showToast;

// app.component('BasePage', BasePage);
// app.component('AuthorizePopup', AuthorizePopup);

app.use(store);

app.mount('#app');
