import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Material from '@primeuix/themes/material'
import {Avatar, Button, Card, Drawer, Menu, Menubar, Popover, SelectButton, Toolbar, Tooltip} from "primevue";
import i18n from "./i18n.js";
const primeUiLicenseKey= 'eyJpZCI6ImZjOGRlZGJiLTRjYTItNGVlZi1iMGQyLTYxZGQ0ZWQxYTA0MCIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODk5OTM2MDEsImV4cCI6MTgyMTUyOTYwMX0.gPJB_mqAXSbSAFsHZJmkw4Wt-psabtDFXK6pbpzjp7jIew8vNPnCH7cux6GoNsj1vtp969Hcn9R2yY5rMK_yBQ';

createApp(App)
    .use(i18n)
    .use(PrimeVue, {ripple: true, theme :{preset:Material}, license: primeUiLicenseKey})
    .component('pv-button', Button)
    .component('pv-select-button', SelectButton)
    .component('pv-avatar', Avatar)
    .component('pv-drawer', Drawer)
    .component('pv-card', Card)
    .component('pv-toolbar', Toolbar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-popover', Popover)
    .directive('tooltip', Tooltip)
    .mount('#app')
