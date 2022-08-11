<template>
<div @click="openSearch()" 
    class="flex mx-auto rounded-full border-[1px] px-2 py-2 shadow-lg box-border border-gray-400"
    :class="showBigSearch ? 'big duration-300 translate-y-16 bg-gray-300 xl:w-[800px] lg:w-[600px] md:w-[400px] md:flex hidden h-16' : 'duration-300'"
    >
        <button class="font-semibold text-sm my-1 mx-2 w-24 border-r-[1px]" :class="showBigSearch ? 'hidden' : 'block' ">Anywhere</button>
        <button class="font-semibold text-sm my-1 mx-2 w-24 border-r-[1px]" :class="showBigSearch ? 'hidden' : 'block' ">Any Week</button>
        <button class="font-light text-sm my-1 mx-1 w-24">
            <p class="font-bold mr-10" :class="showBigSearch ? 'block' : 'hidden' ">Who</p>
            Add Guests
        </button>
        <button class="bg-red-400 rounded-full" :class="showBigSearch ? 'duration-300 my-auto xl:ml-[630px] lg:ml-[440px] w-12 h-12' : 'duration-300 w-7 h-7' ">
            <i class="fa fa-search text-white" aria-hidden="true" :class="showBigSearch ? 'duration-300 fa-md' : 'duration-300 fa-xs' "></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            showBigSearch: false,
        }
    },
    methods: {
        openSearch(e) {
            this.$emit('open-search');
            this.showBigSearch = !this.showBigSearch;
        }
    }
}
</script>