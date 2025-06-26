import { defineStore } from "pinia";
import { ref } from "vue";

export const useHeaderStore = defineStore('Header component', () => {
  const placeholder = ref('')
  const textList = ref([])

  return {
    placeholder, textList,
  }
})