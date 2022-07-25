<template>
    <div class="border-b-[1px] border-gray-200 py-4 fixed overflow-hidden top-0 w-full bg-white z-50">
        <div class="flex justify-between">
            <img class="mt-[3px] w-10 h-10" src="../assets/airbnb-logo.jpg" alt="airbnb-logo">
            <Search />
            <Menu @open-menu-drop="openMenuDrop()" />
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
import Search from './Search.vue'
import Menu from './Menu.vue'

export default{
    name: 'Navbar',
    props: {
        title: String,
        showAddTask: Boolean,
    },
    methods: {
        openMenuDrop() {
            this.$emit('open-menu-drop')
        },
    },
    components: {
        Button,
        Search,
        Menu,
    },
}
</script>