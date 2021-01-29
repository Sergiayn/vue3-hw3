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
      <button class="btn primary"
              @click.prevent="buttonClick(task.id)">
        Посмотреть
      </button>
    </div>
  </template>
  <h1 v-else
      class="text-white center">
    Задач пока нет
  </h1>
</template>

<script>
import AppStatus from '../components/AppStatus'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {AppStatus},
  setup() {
    const router = useRouter()
    const store = useStore()
    store.dispatch('getTask')

    const countActiveStatus = computed(() => store.getters.countActiveStatus)
    const tasks = computed(() => store.getters.tasks)

    const buttonClick = (id) => {
      router.push({name:'task-view',params:{taskId:id}})
    }

    return {
      buttonClick,
      countActiveStatus,
      tasks
    }
  }
}
</script>
