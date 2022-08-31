<template>
  <div class="mt-20 sm:mx-4 md:mx-28 mx-2">
    <Navbar @open-menu-drop="toggleMenuDrop()" />
    <MenuDrop class="hidden md:block duration-200 right-28" :class="showDropMenu ? 'animate-crash -translate-y-[0%]' : 'bottom-0 translate-y-[360%]'" />
    <SideMenu @click="closeMenuOnClick()"/>
    <Main @click="closeMenuOnClick()"/>
    <Footer @click="closeMenuOnClick()"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MenuDrop from './components/MenuDrop.vue'
import SideMenu from './components/SideMenu.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    MenuDrop,
    SideMenu,
    Main,
    Footer
  },
  el: "#app",
  data() {
    return {
      showDropMenu: false,
      showBigSearch: false,
    }
  },
  methods: {
    toggleMenuDrop() {
    	this.showDropMenu = !this.showDropMenu;
    },
    closeMenuDrop(e){
      if (!this.$el.contains(e.target)) {
        this.showDropMenu = false;
      }
    },
    closeMenuOnClick(){
      this.showDropMenu = false;
    },
    openSearch() {
    	this.showBigSearch = !this.showBigSearch;
    },
  },
  created() {
    window.addEventListener("click", this.closeMenuDrop);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeMenuDrop);
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
