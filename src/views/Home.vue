<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Home</h2>
    </div>
    <div class="columns">
      <div class="column is-8">
        <table>
          <tr>
            <th>Task</th>
            <th>Task State</th>
            <th>Deadline</th>
          </tr>
          <tr v-for="task in task_list" :key="task.id">
            <td>{{ task.name }}</td>
            <td>{{ task.state }}</td>
            <td>{{ task.deadLine }}</td>
            <td>
              <button v-on:click="taskDetails(task)">Task Details</button>
            </td>
          </tr>
        </table>
      </div>
      <div class="column is-8">
        <form id="home">
          <p>Task Name is: {{ task.name }}</p>
          <input v-model="task.name" placeholder="task name" />
          <br />
          <span>Task state is:</span>
          <input type="checkbox" id="checkbox" v-model="task.state" />
          <label for="checkbox">{{ task.state }}</label>
          <br />
          <span>Task description is:</span>
          <p style="white-space: pre-line;">{{ task.description }}</p>
          <br />
          <textarea v-model="task.description" placeholder="add description"></textarea>
          <br />
          <button v-on:click="addTask">Add Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      task: { id: null, name: "", state: "", deadLine: "", description: "" },
      task_list: [
        { id: 1, name: "Test1", state: "Complete", deadLine: "23-09-2020" },
        { id: 2, name: "Test2", state: "Incomplete", deadLine: "23-09-2020" },
        { id: 3, name: "Test3", state: "Complete", deadLine: "23-09-2020" }
      ]
    };
  },
  methods: {
    addTask: function(event) {
      if (event) {
        this.task.id = this.task_list.length;
        this.task_list.push(this.task);
      }
    },
    taskDetails: function(task) {
      this.$router.push({ name: 'task', params: { id: task.id, data:task } });
    }
  }
};
</script>
