<script lang="ts" setup>
import PreloadVue from './preload/Preload.vue';
import { zhCN, dateZhCN } from 'naive-ui'
import { themeOverrides } from './naive/index'
import { App } from './App'

App.Instance.Run()
</script>

<template>
    <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
        <n-message-provider>
            <n-dialog-provider>
                <PreloadVue></PreloadVue>
                <router-view />
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<style lang="scss">
@import "./App.scss";
</style>
