<script lang="ts" setup>
import { inject } from 'vue';
import { Dawn } from '../../Dawn';

const instance = inject('instance') as Dawn
const {
    isShow,
    showList,
    currentDisplay
} = instance.menu.InitStates()
instance.menu.InitHooks()
instance.menu.Run()
</script>

<template>
    <div class="Menu" v-show="isShow">
        <span class="Back">

        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Menu.scss"
</style>