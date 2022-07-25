<template>
    <div class="flex rounded-full border-[1px] px-2 py-2 border-gray-400 shadow-lg box-border">
        <button class="font-semibold text-sm my-1 mx-2 w-24 border-r-[1px]">Anywhere</button>
        <button class="font-semibold text-sm my-1 mx-2 w-24 border-r-[1px]">Any Week</button>
        <button class="font-light text-sm my-1 mx-1 w-24">Add Guests</button>
        <button class="bg-red-400 rounded-full w-7 h-7 mt-[3px]">
            <i class="fa fa-search fa-xs text-white" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Search',
    methods: {
        onClick(e) {
            this.$emit('btn-click')
        }
    }
}
</script>