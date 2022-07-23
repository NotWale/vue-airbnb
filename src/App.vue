<template>
<div class="sm:mx-4 md:mx-22 lg:mx-28 ">
  <Navbar @open-menu-drop="toggleMenuDrop()" />
  <div class="float-right" v-show="showDropMenu" :class="{'is-active': showDropMenu}">
    <MenuDrop />
  </div>
  <div v-show="showAddTask">
    <AddTask @add-task="addTask" />
  </div>
  <Tasks @delete-task="deleteTask" :tasks="tasks"/>
</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Tasks from './components/Tasks.vue'
import AddTask from './components/AddTask.vue'
import MenuDrop from './components/MenuDrop.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Tasks,
    AddTask,
    MenuDrop,
  },
  data() {
    return {
      tasks: [],
      showDropMenu: false,
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

    this.tasks = [
    {
      id: 1,
      text: 'test',
      reminder: 'true'
    },
    {
      id: 2,
      text: 'task',
      reminder: 'false',
    }]
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
