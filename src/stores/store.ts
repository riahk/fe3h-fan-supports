import { reactive } from 'vue'

export const store = reactive({
  selectedSupport: 'doronette' as string | null,
  setSelectedSupport(support: string) {
    this.selectedSupport = support
  },
})
