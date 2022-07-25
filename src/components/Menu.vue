<template>
    <div class="flex my-1 mr-56">
        <button id="falltext" @click="fallText()" :class="{'animate-text-fall': fall}" class="hidden lg:flex font-semibold mt-1 text-sm px-2 py-2 rounded-full hover:bg-gray-100">Become a Host</button>
        <button id="bounceball" @click="bounceBall()" :class="{'animate-[bounce_0.4s_ease-in-out_2.5]': bounce}" class="hover:bg-gray-100 rounded-full w-9 h-9 my-1 active:after:animate-bounce">
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
    data() {
    return {
      bounce: false,
      fall: false,
    }
  },
    methods: {
        openMenuDrop(e) {
            this.$emit('open-menu-drop')
        },
        bounceBall(e){
            this.bounce = true;
            const animated = document.getElementById("bounceball");
            animated.addEventListener('animationend', () => {
            console.log('Animation ended');
            this.bounce = false;
            });
        },
        fallText(e){
            this.fall = true;
            const animated = document.getElementById("falltext");
            animated.addEventListener('animationend', () => {
            console.log('Animation ended');
            this.fall = false;
            });
        }
    }
}
</script>