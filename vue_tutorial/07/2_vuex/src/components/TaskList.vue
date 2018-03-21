<template>
  <label class="list-group-item">
    <span class="pull-right btn btn-link" v-on:click.prevent="edit_click">Edit</span>
    <input type="checkbox" v-model="task.finished" /> {{task.name}}
  </label>
</template>

<script>
import Store from '../store/index'

export default {
  props: [
    "task"
  ],
  methods: {
    edit_click: function(event){
      var newName = window.prompt("Input Task.", this.task.name);
      if(typeof newName === "string"){
        this.task.name = newName;
      }
    }
  }
}
</script>

<style>

</style>
