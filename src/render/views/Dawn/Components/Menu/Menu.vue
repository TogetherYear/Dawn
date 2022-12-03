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
            <span class="Icon" :style="{ backgroundColor: currentDisplay == d.key ? '#212121' : '#2b2b2b' }">
                <img :src="d.icon" alt="">
            </span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
@import "./Menu.scss"
</style>