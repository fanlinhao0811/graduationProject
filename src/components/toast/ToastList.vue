<template>
  <transition-group tag="div" class="toast-list" name="toast" v-bind="options">
    <toast-item v-for="toast in toasts" :key="toast.message" v-bind="toast" @remove="remove(toast)" />
  </transition-group>
</template>

<script>
import ToastItem from './Toast'

export default {
  name: 'ToastList',

  components: { ToastItem },

  props: ['options'],

  data () {
    return {
      toasts: []
    }
  },

  created () {
    document.body.appendChild(this.$mount().$el)
  },

  destroyed () {
    document.body.removeChild(this.$el)
  },

  methods: {
    add (toast = {}) {
      const { message } = toast

      if (
        message &&
        this.toasts.every(item => item.message !== message)
      ) {
        this.toasts.push(toast)
      }
    },

    remove (toast) {
      this.toasts = this.toasts.filter(item => item !== toast)
    }
  }
}
</script>

<style scoped>
.toast-list {
  position: fixed;
  top: 50px;
  left: 0;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  pointer-events: none;
}

.toast-enter, .toast-leave-to {
  opacity: 0;
  transform: translate3d(0, -5px, 0);
}

.toast-leave-active {
  position: absolute;
}
</style>
