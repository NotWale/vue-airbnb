<template>
    <div class="flex md:justify-between border-b-[1px] h-20 border-gray-200 py-4 fixed overflow-hidden top-0 w-full bg-white z-50" :class="[ showBigSearch ? 'transform h-40 duration-300' : 'duration-300']">
        <img class="hidden md:flex mt-[3px] w-10 h-10" src="../assets/airbnb-logo.jpg" alt="airbnb-logo">
        <div class="invisible xl:ml-32 lg:ml-12 md:ml-6"></div>
        <div class="absolute xl:ml-[650px] lg:ml-[500px] space-x-4 mt-2 text-[18px]" :class="showBigSearch ? 'flex' : 'hidden'">
            <button class="border-black border-b-2">
                Stays
            </button>
            <button class="duration-150 transform after:block after:scale-x-0 hover:scale-x-1 hover:border-pink-500 border-b-2 hover:text-red-700">Experiences</button>
            <button class="duration-150 transform after:block after:scale-x-0 hover:scale-x-1 hover:border-pink-500 border-b-2 hover:text-red-700">Online Experiences</button>
        </div>
        <Search @open-search="openSearch()" />
        <Menu class="hidden md:flex" @open-menu-drop="openMenuDrop()" />
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
    },
    data() {
        return {
            showBigSearch: false,
        }
    },
    methods: {
        openSearch() {
            this.showBigSearch = !this.showBigSearch;
        },
        openMenuDrop() {
            this.$emit('open-menu-drop')
        }
    },
    components: {
        Button,
        Search,
        Menu,
    },
}
</script>