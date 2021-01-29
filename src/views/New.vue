<template>
  <form class="card">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="name">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model.trim="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model.trim="desc"></textarea>
    </div>

    <button class="btn primary"
            :disabled="isDisabledButton"
            @click.prevent="onClickButton"
    >
      Создать
    </button>
  </form>
</template>


<script>
import {computed,ref,watch} from 'vue'
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const store = useStore()

    const name = ref('')
    const date = ref('')
    const desc = ref('')
    const isDisabledButton = ref(true)
    const onClickButton = () => {
      if(validForm.value) {
        const item = {
          name:name.value,
          timestamp:(new Date(date.value).getTime()) /1000,
          desc:desc.value
        }
        store.dispatch('addNewTask',item)
        router.push({name:'home'})
      }
    }
    const validForm = computed(() => {
      return !!(name.value.length && date.value.length && desc.value.length)
    })
    watch([name, date, desc], () => {
      isDisabledButton.value = !validForm.value
    })

    return {
      name,
      date,
      desc,
      isDisabledButton,
      onClickButton
    }
  }
}
</script>