<template>
  <div class="Toast">{{ message }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}

export const ToatsFunction = () => {
  const toastDate = reactive({
    isToast: false,
    ToastMsg: ''
  })
  const {
    isToast,
    ToastMsg
  } = toRefs(toastDate)
  const showToast = (message) => {
    toastDate.isToast = true
    toastDate.ToastMsg = message
    setTimeout(() => {
      toastDate.isToast = false
      toastDate.ToastMsg = ''
    }, 2000)
  }
  return {
    isToast,
    ToastMsg,
    showToast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Toast {
  position: absolute;
  left: 50%;
  top: 50%;
  padding: .1rem;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #fff;
}
</style>
