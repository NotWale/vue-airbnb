<template>
  <div class="mt-20 sm:mx-4 md:mx-22 lg:mx-28">
    <Navbar @open-menu-drop="toggleMenuDrop()" />
    <div class="float-right" v-show="showDropMenu" >
      <MenuDrop />
    </div>
    <SideMenu />
    <Main />
    <Footer />
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
  data() {
    return {
      tasks: [],
      showDropMenu: false,
    }
  },
  methods: {
    toggleMenuDrop() {
      console.log("Changing showDropMenu to " + this.showDropMenu);
    	this.showDropMenu = !this.showDropMenu;
    },
    closeMenuDrop(e){
      if (!this.$el.contains(e.target)) {
        console.log("Closing Menu Drop");
        this.showDropMenu = false;
        console.log("Menu Drop = " + this.showDropMenu);
      }
    },
    addTask(task) {
      this.tasks = [...this.tasks, task]
    },
    deleteTask(id) {
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task) => task.id !== id)
      }
    }
  },
  created() {
    window.addEventListener("click", this.closeMenuDrop);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.close);
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
