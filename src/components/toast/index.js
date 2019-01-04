import Vue from 'vue'
import ToastList from './ToastList'

let toastList

function toast (arg) {
  if (!toastList) {
    toastList = new Vue({
      extends: ToastList,
      propsData: {
        options: toast.listOptions
      }
    })
  }

  const toastItem = typeof arg === 'string'
    ? { message: arg }
    : arg

  toastList.add(toastItem)
}

toast.listOptions = {}

export default toast
