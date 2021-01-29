<template>
  <div class="card" v-if="task">
    <h2>{{task.name}}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.timestamp * 1000).toLocaleDateString() }}</p>
    <p><strong>Описание</strong>: {{task.desc}}</p>
    <div>
      <button @click.prevent="changeStatus('pending')"
              :disabled="disableButton"
              class="btn" >
        Взять в работу
      </button>
      <button @click.prevent="changeStatus('done')"
              :disabled="disableButton"
              class="btn primary">
        Завершить
      </button>
      <button @click.prevent="changeStatus('cancelled')"
              class="btn danger">
        Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{id}}</strong> нет.
  </h3>
</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import AppStatus from '../components/AppStatus'
import validateTimestamp from "@/use/validateTimestamp"

export default {
  components: {AppStatus},
  setup: function () {
    const route = useRoute()
    const store = useStore()
    const id = route.params.taskId
    const task = store.getters.task(id)
    const changeStatus = (status) => {
      store.dispatch('changeStatusTask', {id,status})
    }
    const disableButton = computed(() => validateTimestamp(task.timestamp))

    return {
      disableButton,
      changeStatus,
      id,
      task
    }
  }
}
</script>
