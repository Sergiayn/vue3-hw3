<template>
  <span class="badge"
        :class="badge">
    {{statuses[type] }}
  </span>
</template>

<script>
import {useStore} from "vuex"
import {ref, onMounted, onUpdated} from "vue"
export default {
  props: {
    type: {
      require: true,
      type: String
    }
  },
  setup(props) {
    const store = useStore()
    const statuses = store.getters.statuses
    const badge = ref('')
    const onCnangeBadge = () => {
      if (props.type === 'active') badge.value = 'primary'
      else if (props.type === 'done') badge.value = 'primary'
      else if (props.type === 'cancelled') badge.value = 'danger'
      else if (props.type === 'pending') badge.value = 'warning'
      else badge.value = 'danger'
    }
    onMounted(onCnangeBadge)
    onUpdated(onCnangeBadge)

    return {
      badge,
      statuses
    }
  }
}
</script>