<template>
  <div class="container">
    <h1>Vue Todo</h1>

    <div class="inputArea">
      <task-form :task="newTask"></task-form>
    <!-- inputArea --></div>

    <hr />

    <div class="taskListOperator">
      <button class="btn btn-default" v-on:click="delete_click">Delete</button>
    <!-- taskListOperator --></div>

    <div class="list-group">
      <p class="text-muted" v-show="tasks.length < 1">nothing to do.</p>
      <task-list v-for="task in tasks" :task="task"></task-list>
    <!-- list-group --></div>

  <!-- container --></div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import Store from './store/index'

export default {
  data: function(){
    return Store.state
  },
  computed: {

  },
  methods: {
    delete_click: function(event){
      Store.commit("del");
    }
  },
  components: { TaskForm, TaskList }
}
</script>
