<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Task Details</h2>
    </div>
      <div class="column is-8">
        <form id="home">
          <input v-model="task.name" placeholder="task name" />
          <p>Task Name is: {{ task.name }}</p>
          <input type="checkbox" id="checkbox" v-model="task.state" />
          <label for="checkbox">{{ task.state }}</label>
          <br >
          <span>Task description is:</span>
          <p style="white-space: pre-line;">{{ task.description }}</p>
          <br />
          <textarea v-model="task.description" placeholder="update description"></textarea>
          <br >
          <button v-on:click="updateTask">Update Task</button>
        </form>
      </div>
    </div>
</template>

<script>
export default {
  name: "Task",
   created() {
    this.baseaccount = this.$router.params.baseaccount;
  },
  data() {
    return {
        task:{ id: this.$route.params.id, name: this.$route.params.data.name, state: this.$route.params.data.state
        , deadLine: this.$route.params.data.deadLine, "description": this.$route.params.data.name.description },
    };
  },
  methods: {}
};
</script>
