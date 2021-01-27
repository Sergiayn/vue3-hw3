<template>
  <div class="card" v-if="task">
    <h2>{{task.name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.timestamp * 1000).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.desc}}</p>
    <div>
      <button class="btn">Взять в работу</button>
      <button class="btn primary">Завершить</button>
      <button class="btn danger">Отменить</button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import AppStatus from '../components/AppStatus'

export default {
  components: {AppStatus},
  setup() {
    const route = useRoute()
    const store = useStore()
    const id = parseInt(route.params.taskId)
    const task = store.getters.task(id)

    return {
      id,
      task
    }
  }
}
</script>
