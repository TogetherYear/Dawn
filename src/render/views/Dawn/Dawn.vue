<script lang="ts" setup>
import { provide } from 'vue';
import HeaderBarVue from '@render/common/HeaderBar/HeaderBar.vue';
import Menuvue from './Components/Menu/Menu.vue'
import { Dawn } from './Dawn'

const instance = new Dawn()

provide('instance', instance)

const {

} = instance.InitStates()

instance.InitHooks()

instance.Run()
</script>

<template>
    <div class="Dawn">
        <HeaderBarVue :view="'Dawn'"></HeaderBarVue>
        <Menuvue></Menuvue>
    </div>
</template>

<style lang="scss" scoped>
@import "./Dawn.scss";
</style>
