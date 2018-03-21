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
export default {
  props: ["task", "onSubmit"],
  methods: {
    form_submit: function(event){
      if(!this.task.name){
        return;
      }
      console.log("a",this)
      this.onSubmit(event, this.task);
    }
  }
}
</script>

<style>

</style>
