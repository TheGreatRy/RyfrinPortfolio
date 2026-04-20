<template>
  <div class="app-window">

    <div class="title-bar">
      <span class="title-bar-text">&#128196; Ry — Portfolio</span>
      <div class="title-bar-controls">
        <button class="title-btn">&#8722;</button>
        <button class="title-btn">&#9633;</button>
        <button class="title-btn title-btn-close">&#x2715;</button>
      </div>
    </div>

    <nav class="menubar">
      <RouterLink to="/" class="nav-logo">☕</RouterLink>
      <ul class="nav-links">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
      <button class="darkmode-toggle" @click="toggleDark" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
        {{ isDark ? '☀' : '🌙' }}
      </button>
    </nav>

    <main>
      <div class="desktop">
        <RouterView />
      </div>
    </main>

    <div class="status-bar">
      <span class="status-pane">Ready</span>
      <span class="status-pane">&copy; {{ year }} Ry. All rights reserved.</span>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const year = new Date().getFullYear()
const isDark = ref(false)

function toggleDark() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark-mode', isDark.value)
  localStorage.setItem('portfolio-dark', isDark.value)
}

onMounted(() => {
  const saved = localStorage.getItem('portfolio-dark')
  if (saved === 'true') {
    isDark.value = true
    document.documentElement.classList.add('dark-mode')
  }
})
</script>
