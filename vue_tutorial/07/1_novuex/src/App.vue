<template>
  <div class="container">
    <h1>Vue Todo</h1>

    <div class="inputArea">
      <task-form :task="newTask" :on-submit="newTask_submit"></task-form>
    <!-- inputArea --></div>

    <hr />

    <div class="taskListOperator">
      <button class="btn btn-default" v-on:click="delete_click">Delete</button>
    <!-- taskListOperator --></div>

    <div class="list-group">
      <p class="text-muted" v-show="tasks.length < 1">nothing to do.</p>
      <task-list v-for="task in tasks" :task="task"></task-list>
    </label>
    <!-- list-group --></div>

  <!-- container --></div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

export default {
  data: function(){
    return {
      newTask:{
        name: ""
      },
      tasks: [
        {name: "Buy milk 2L"},
        {name: "Call to Alice"},
        {name: "Return book"},
      ]
    }
  },
  computed: {

  },
  methods: {
    newTask_submit: function(event){
      this.tasks.push({name:this.newTask.name})
      this.newTask = {name: ""}
    },
    delete_click: function(event){
      this.tasks = this.tasks.filter(function(v){ return !v.finished })
    }
  },
  components: { TaskForm, TaskList }
}
</script>
