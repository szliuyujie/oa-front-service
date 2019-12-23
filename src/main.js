import Vue from 'vue';
import App from './App.vue';
import Storage from 'vue-ls';
import router from './router';
import store from './store/';

import { VueAxios } from '@/utils/request';

import Antd from 'ant-design-vue';
import Viser from 'viser-vue';
import 'ant-design-vue/dist/antd.less'; // or 'ant-design-vue/dist/antd.less'

import '@/permission'; // permission control
import '@/utils/filter'; // base filter
import Print from 'vue-print-nb-jeecg';
/*import '@babel/polyfill'*/
import VueApexCharts from 'vue-apexcharts';

import preview from 'vue-photo-preview';
import 'vue-photo-preview/dist/skin.css';
import '@jeecg/antd-onine';
import '@jeecg/antd-onine/dist/OnlineForm.css';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import EleForm from 'vue-ele-form';

import F2 from '@antv/f2';

import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

import {
    ACCESS_TOKEN,
    DEFAULT_COLOR,
    DEFAULT_THEME,
    DEFAULT_LAYOUT_MODE,
    DEFAULT_COLOR_WEAK,
    SIDEBAR_TYPE,
    DEFAULT_FIXED_HEADER,
    DEFAULT_FIXED_HEADER_HIDDEN,
    DEFAULT_FIXED_SIDEMENU,
    DEFAULT_CONTENT_WIDTH_TYPE,
    DEFAULT_MULTI_PAGE,
} from '@/store/mutation-types';
import config from '@/defaultSettings';

import JDictSelectTag from './components/dict/index.js';
import hasPermission from '@/utils/hasPermission';
import vueBus from '@/utils/vueBus';
import JeecgComponents from '@/components/jeecg/index';
import VuePreview from 'vue-preview';

Vue.config.productionTip = false;
Vue.use(Storage, config.storageOptions);
Vue.use(Antd);
Vue.use(VueAxios, router);
Vue.use(Viser);
Vue.use(hasPermission);
Vue.use(JDictSelectTag);
Vue.use(Print);
Vue.use(VueApexCharts);
Vue.component('apexchart', VueApexCharts);
Vue.use(preview);
Vue.use(vueBus);
Vue.use(JeecgComponents);
Vue.use(ViewUI);
Vue.use(VuePreview);
Vue.use(ElementUI);
Vue.use(EleForm);
Vue.use(F2);

new Vue({
    router,
    store,
    mounted() {
        store.commit('SET_SIDEBAR_TYPE', Vue.ls.get(SIDEBAR_TYPE, true));
        store.commit('TOGGLE_THEME', Vue.ls.get(DEFAULT_THEME, config.navTheme));
        store.commit(
            'TOGGLE_LAYOUT_MODE',
            Vue.ls.get(DEFAULT_LAYOUT_MODE, config.layout)
        );
        store.commit(
            'TOGGLE_FIXED_HEADER',
            Vue.ls.get(DEFAULT_FIXED_HEADER, config.fixedHeader)
        );
        store.commit(
            'TOGGLE_FIXED_SIDERBAR',
            Vue.ls.get(DEFAULT_FIXED_SIDEMENU, config.fixSiderbar)
        );
        store.commit(
            'TOGGLE_CONTENT_WIDTH',
            Vue.ls.get(DEFAULT_CONTENT_WIDTH_TYPE, config.contentWidth)
        );
        store.commit(
            'TOGGLE_FIXED_HEADER_HIDDEN',
            Vue.ls.get(DEFAULT_FIXED_HEADER_HIDDEN, config.autoHideHeader)
        );
        store.commit(
            'TOGGLE_WEAK',
            Vue.ls.get(DEFAULT_COLOR_WEAK, config.colorWeak)
        );
        store.commit(
            'TOGGLE_COLOR',
            Vue.ls.get(DEFAULT_COLOR, config.primaryColor)
        );
        store.commit('SET_TOKEN', Vue.ls.get(ACCESS_TOKEN));
        store.commit('SET_MULTI_PAGE', Vue.ls.get(DEFAULT_MULTI_PAGE, true));
    },
    render: h => h(App),
}).$mount('#app');