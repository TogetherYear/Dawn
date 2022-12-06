<script lang="ts" setup>
import { Setting } from './Setting';

const instance = new Setting()
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Setting">
        Setting
    </div>
</template>

<style lang="scss" scoped>
@import "./Setting.scss"
</style>