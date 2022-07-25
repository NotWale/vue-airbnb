<template>
    <div class="flex my-1 mr-56">
        <button class="font-semibold text-sm px-2 py-2 rounded-full hover:bg-gray-100">Become a Host</button>
        <button class="hover:bg-gray-100 rounded-full w-9 h-9 my-1">
            <i class="fa fa-globe fa-sm text-black" aria-hidden="true"></i>
        </button>
        <button @click="openMenuDrop()" class="flex rounded-full border-[1px] border-gray-400 w-22 h-3 ml-1 py-5 px-3 text-black transition-shadow duration-300 hover:shadow-lg">
            <i class="fa fa-bars fa-sm" aria-hidden="true"></i>
            <i class="fa fa-user-circle fa-xl ml-2 text-gray-600"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Menu',
    methods: {
        openMenuDrop(e) {
            this.$emit('open-menu-drop')
        }
    }
}
</script>