<script lang="ts" setup>
import { inject } from 'vue';
import { Dawn } from '../../Dawn';

const instance = inject('instance') as Dawn
const {
    showList,
    currentDisplay
} = instance.menu.InitStates()
instance.menu.InitHooks()
instance.menu.Run()
</script>

<template>
    <div class="Menu">
        <span class="Display" v-for="d in showList" :key="d.id" @click="instance.menu.OnDisplayClick(d)">
            <span class="Back" :style="{ opacity: currentDisplay == d.key ? '1' : '0' }"></span>
            <span class="Icon">
                <img :src="d.icon" alt="">
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Menu.scss"
</style>