<template>
  <span class="badge"
        :class="badge">
    {{statuses[type] }}
  </span>
</template>

<script>
import statuses from "@/store/statuses"
import {ref, onMounted} from "vue"
export default {
  props: {
    type: {
      require: true,
      type: String
    }
  },
  setup(props) {
    const badge = ref('')

    onMounted(() => {
      if (props.type === 'active') badge.value = 'primary'
      else if (props.type === 'done') badge.value = 'primary'
      else if (props.type === 'cancelled') badge.value = 'danger'
      else if (props.type === 'pending') badge.value = 'warning'
      else badge.value = 'danger'
    })

    return {
      badge,
      statuses
    }
  }
}
</script>