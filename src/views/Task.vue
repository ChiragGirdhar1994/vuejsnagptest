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
          </tr>
        </table>
      </div>
      <div class="column is-8">
        <form id="home">
          <input v-model="taskName" placeholder="task name" />
          <p>Task Name is: {{ taskName }}</p>
          <input type="checkbox" id="checkbox" v-model="state" />
          <label for="checkbox">{{ state }}</label>
          <span>Task description is:</span>
          <p style="white-space: pre-line;">{{ description }}</p>
          <br />
          <textarea v-model="description" placeholder="add multiple lines"></textarea>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      task_list: [
        { id: 1, name: "Test1", state: "Complete", deadLine: "23-09-2020" },
        { id: 2, name: "Test2", state: "Incomplete", deadLine: "23-09-2020" },
        { id: 3, name: "Test3", state: "Complete", deadLine: "23-09-2020" }
      ]
    };
  },
  methods: {}
};
</script>
