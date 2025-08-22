import { ref, onMounted, onUnmounted, computed } from 'vue'

export function useWindowSize() {
  // при SSR window может быть undefined
  const hasWindow = typeof window !== 'undefined'
  
  const width = ref(hasWindow ? window.innerWidth : 0)
  const height = ref(hasWindow ? window.innerHeight : 0)
  
  function update() {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }
  
  onMounted(() => {
    if (hasWindow) {
      window.addEventListener('resize', update)
    }
  })
  
  onUnmounted(() => {
    if (hasWindow) {
      window.removeEventListener('resize', update)
    }
  })
  const isDesktop = computed(() => width.value > 768)
  
  
  return { width, height, isDesktop }
}
