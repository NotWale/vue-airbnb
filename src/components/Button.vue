<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick(e) {
            this.$emit('btn-click')
        }
    }
}
</script>