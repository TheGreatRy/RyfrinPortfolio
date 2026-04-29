<template>
  <div class="app-window">

    <div class="title-bar">
      <span class="title-bar-text">°˖✧◝(⁰▿⁰)◜ NAVBAR 。✧˖°</span>
      <div class="title-bar-controls">
        <button class="title-btn">&#8722;</button>
        <button class="title-btn">&#9633;</button>
        <button class="title-btn title-btn-close">&#x2715;</button>
      </div>
    </div>

    <nav class="menubar">
      <RouterLink to="/" class="nav-logo">(ˇ▽ˇ)ノ♪♬♫ RETURN HOME ♪♬♫</RouterLink>
      <ul class="nav-links">
        <li><RouterLink to="/RyfrinPortfolio/">HOME</RouterLink></li>
        <li><RouterLink to="/RyfrinPortfolio/projects">PROJECTS</RouterLink></li>
        <li><RouterLink to="/RyfrinPortfolio/about">ABOUT</RouterLink></li>
        <li><RouterLink to="/RyfrinPortfolio/contact">CONTACT</RouterLink></li>
      </ul>
      <button class="darkmode-toggle" @click="toggleDark" :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
        {{ isDark ? '〣( ºΔº )〣' : '(－－) zzZ' }}
      </button>
    </nav>

    <main>
      <div class="desktop">
        <RouterView />
      </div>
    </main>

    <div class="status-bar">
      <span class="status-pane">Ready</span>
      <span class="status-pane">&copy; {{ year }} CinnaS0ULBytes. All rights reserved.</span>
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
