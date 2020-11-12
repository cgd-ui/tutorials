import Vue from 'vue';
import App from '@enso-ui/ui/src/core/app';
import Tutorial from './components/settings/Tutorial.vue';

Vue.component('setting-tutorials', Tutorial);
App.registerSettingsItem('setting-tutorials', 350);
