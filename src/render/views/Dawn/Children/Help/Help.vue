<script lang="ts" setup>
import { Help } from './Help';

const instance = new Help()
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Help">
        Help
    </div>
</template>

<style lang="scss" scoped>
@import "./Help.scss"
</style>