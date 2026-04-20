<template>
  <div
    class="win-panel"
    :class="{ 'is-dragging': dragging }"
    :style="panelStyle"
    @mousedown="bringToFront"
  >
    <div class="win-titlebar" @mousedown.stop="startDrag">
      <span class="win-title-text">{{ title }}</span>
    </div>
    <div class="win-body">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'

// Shared across all instances — clicking any panel bumps it to front
let globalZ = 10

const props = defineProps({
  title:    { type: String, default: 'Window' },
  initialX: { type: Number, default: 0 },
  initialY: { type: Number, default: 0 },
  width:    { type: Number, default: 400 },
  height:   { type: Number, default: 400 },
})

const x       = ref(props.initialX)
const y       = ref(props.initialY)
const z       = ref(++globalZ)
const dragging = ref(false)

const panelStyle = computed(() => ({
  left:   x.value + 'px',
  top:    y.value + 'px',
  width:  props.width  + 'px',
  height: props.height + 'px',
  zIndex: z.value,
}))

let startMouseX = 0
let startMouseY = 0
let startX      = 0
let startY      = 0

function startDrag(e) {
  if (e.button !== 0) return
  bringToFront()
  dragging.value = true
  startMouseX = e.clientX
  startMouseY = e.clientY
  startX = x.value
  startY = y.value
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup',   stopDrag)
  e.preventDefault()
}

function onMove(e) {
  x.value = startX + (e.clientX - startMouseX)
  y.value = startY + (e.clientY - startMouseY)
}

function stopDrag() {
  dragging.value = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup',   stopDrag)
}

function bringToFront() {
  z.value = ++globalZ
}

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup',   stopDrag)
})
</script>
