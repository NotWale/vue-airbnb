<template>
    <div class="fixed flex flex-col -mt-4 -ml-56 border-gray-100 border-[1px] rounded-xl shadow-lg w-56 z-50 bg-white">
        <button class="h-12 w-full mx-auto mt-2 font-semibold text-sm hover:bg-gray-100">Sign Up</button>
        <button class="h-12 w-full mx-auto text-sm border-b-[1px] hover:bg-gray-100">Log In</button>
        <button class="h-12 w-full mx-auto mt-2 text-sm hover:bg-gray-100">Host your home</button>
        <button class="h-12 w-full mx-auto text-sm hover:bg-gray-100">Host an experience</button>
        <button class="h-12 w-full mx-auto mb-2 text-sm hover:bg-gray-100">Help</button>
    </div>
</template>

<script>
export default {
    name: 'MenuDrop',
    methods: {
        openMenu(e) {
            this.$emit('open-menu')
        }
    }
}
</script>