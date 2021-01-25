<template>
  <template v-if="tasks.length">
    <h3 class="text-white">Всего активных задач: {{countActiveStatus}}</h3>
    <div class="card"
         v-for="task in tasks"
         :key="task.id">
      <h2 class="card-title">
        {{task.name}}
        <AppStatus :type="task.status" />
      </h2>
      <p><strong><small>{{task.date }}</small></strong></p>
      <button class="btn primary">Посмотреть</button>
    </div>
  </template>
  <h1 v-else
      class="text-white center">
    Задач пока нет
  </h1>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {AppStatus},
  setup() {
    const store = useStore()

    const countActiveStatus = ref(store.getters.countActiveStatus)
    const tasks = ref(store.getters.tasks)

    return {
      countActiveStatus,
      tasks
    }
  }
}
</script>
