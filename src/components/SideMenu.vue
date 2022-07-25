<template>
    <div class="flex flex-row">
        <div class="mt-5 py-2 w-full flex flex-row space-x-12 text-gray-500 whitespace-nowrap overflow-hidden bg-[linear-gradient(to left,rgba(255,255,255,0)0%,rgba(255,255,255,1)10%,rgba(255,255,255,1)90%,rgba(255,255,255,0)100%)]" v-dragscroll.x>
            <button @click="clickedMenuItem='Islands'" class="w-12 h-16 flex flex-col" :class="[ clickedMenuItem === 'Islands' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-globe mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Islands</p>
            </button>
            <button @click="clickedMenuItem='Parks'" class="w-24 h-16 flex flex-col" :class="[ clickedMenuItem === 'Parks' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-moon mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">National parks</p>
            </button>
            <button @click="clickedMenuItem='Chalets'" class="w-12 h-16 flex flex-col" :class="[ clickedMenuItem === 'Chalets' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-home mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Chalets</p>
            </button>
            <button @click="clickedMenuItem='OMG'" class="w-10 h-16 flex flex-col" :class="[ clickedMenuItem === 'OMG' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-reddit-alien mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">OMG!</p>
            </button>
            <button @click="clickedMenuItem='Camping'" class="w-14 h-16 flex flex-col" :class="[ clickedMenuItem === 'Camping' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-free-code-camp mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Camping</p>
            </button>
            <button @click="clickedMenuItem='TinyHomes'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'TinyHomes' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-home mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Tiny homes</p>
            </button>
            <button @click="clickedMenuItem='Lakefront'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Lakefront' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-ship mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Lakefront</p>
            </button>
            <button @click="clickedMenuItem='Arctic'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Arctic' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-snowflake mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Arctic</p>
            </button>
            <button @click="clickedMenuItem='Frames'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Frames' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-home mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">A-frames</p>
            </button>
            <button @click="clickedMenuItem='Design'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Design' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-object-ungroup mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Design</p>
            </button>
            <button @click="clickedMenuItem='Surfing'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Surfing' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-bath mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Surfing</p>
            </button>
            <button @click="clickedMenuItem='BedBreak'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'BedBreak' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-coffee mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Bed & breakfasts</p>
            </button>
            <button @click="clickedMenuItem='Treeh'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Treeh' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-tree mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Treehouses</p>
            </button>
            <button @click="clickedMenuItem='Ski'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Ski' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-snowflake mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Skiing</p>
            </button>
            <button @click="clickedMenuItem='History'" class="w-28 h-16 flex flex-col" :class="[ clickedMenuItem === 'History' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-home mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Historical Homes</p>
            </button>
            <button @click="clickedMenuItem='Cave'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Cave' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-exclamation-triangle mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Cave</p>
            </button>
            <button @click="clickedMenuItem='Countrys'" class="w-18 h-16 flex flex-col" :class="[ clickedMenuItem === 'Countrys' ? 'border-b-2 border-black text-black' : 'hover:border-b-2 border-gray-200 hover:text-black']">
                <i class="fa fa-home mb-2 mx-auto" aria-hidden="true"></i>
                <p class="mx-auto text-[13px]">Countryside</p>
            </button>
        </div>
        <button @click="openFilters()" class="flex mt-6 mx-2 rounded-xl border-[1px] border-gray-300 w-24 h-11 py-3 px-3 text-black">
                <i class="fa fa-sliders mt-[2px]" aria-hidden="true"></i>
                <p class="ml-2">Filters</p>
        </button>
    </div>
</template>

<script>
import Button from './Button.vue'
import Search from './Search.vue'
import Menu from './Menu.vue'

export default{
    name: 'SideMenu',
    props: {
        title: String,
        showAddTask: Boolean,
    },
    data() {
        return {
            clickedMenuItem: 'Islands',
        }
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