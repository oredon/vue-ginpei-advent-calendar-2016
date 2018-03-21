<template>
  <form v-on:submit.prevent="form_submit">
    <div class="input-group">
      <input class="form-control" type="text" placeholder="Buy milk 2L" v-model="task.name">
      <span class="input-group-btn">
        <button class="btn btn-primary">Add new task</button>
      </span>
    </div>
  </form>
</template>

<script>
import Store from '../store/index'

export default {
  props: ["task"],
  methods: {
    form_submit: function(event){
      if(!this.task.name){
        return;
      }
      console.log("a",this)
      Store.commit("add");
    }
  }
}
</script>

<style>

</style>
