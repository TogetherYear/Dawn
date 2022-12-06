<script lang="ts" setup>
import { Message } from './Message';

const instance = new Message()
const {

} = instance.InitStates()
instance.InitHooks()
instance.Run()
</script>

<template>
    <div class="Message">
        Message
    </div>
</template>

<style lang="scss" scoped>
@import "./Message.scss"
</style>