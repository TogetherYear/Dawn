<script lang="ts" setup>
import { provide } from 'vue';
import HeaderVue from "@render/common/Header/Header.vue"
import { Dawn } from './Dawn'

provide('view', 'Dawn')

const instance = new Dawn()

provide('instance', instance)

const {

} = instance.InitStates()

instance.InitHooks()

instance.Run()
</script>

<template>
    <div class="Dawn">
        <HeaderVue></HeaderVue>
        <n-button strong secondary type="primary" class="Btn" @click="instance.Test()">
            Emit
        </n-button>
    </div>
</template>

<style lang="scss" scoped>
@import "./Dawn.scss";
</style>
