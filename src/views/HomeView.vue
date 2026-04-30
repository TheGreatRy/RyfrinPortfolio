<template>
  <div class="page-home">

    <DraggablePanel title="~ヾ(・ω・) BRIEF INTRO ⊂(´• ω •⊂)" :initial-x="0" :initial-y="0" :width="552" :height="510">
      <div class="hero-banner">
        <span>(￣▽￣)/♫•*¨*•.¸¸♪ WELCOME!!! TRY DRAGGING THE WINDOWS! ♪♬♫</span>
      </div>
      <div class="hero-content">
        <p class="hero-greeting">Hi, I'm</p>
        <h1 class="hero-name">Ry</h1>
        <p class="hero-title">Undergraduate for Bachelor of Science in Software and Game Development</p>
        <p class="hero-tagline">Lover of math, story telling, TTRPGs, and creative arts</p>
        <div class="hero-actions">
          <RouterLink to="/projects" class="btn btn-primary">View My Work</RouterLink>
          <RouterLink to="/contact" class="btn btn-outline">Get In Touch</RouterLink>
        </div>
      </div>
    </DraggablePanel>

    <DraggablePanel title="(ノ°∀°)ノ⌒･*:.｡. SKILLS .｡.:*･゜ﾟ･*☆" :initial-x="570" :initial-y="32" :width="332" :height="474">
      <div class="card-grid">
        <div v-for="skill in skills" :key="skill.title" class="card">
          <div class="card-icon">{{ skill.icon }}</div>
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.description }}</p>
        </div>
      </div>
    </DraggablePanel>

  </div>
</template>

<script setup>
import { RecycleScroller } from 'vue-virtual-scroller';
import DraggablePanel from '../components/DraggablePanel.vue'

// Replace these with your actual skill areas
const skills = [
  {
    icon: 'ヽ(°〇°)ﾉ',
    title: 'Coding',
    description: '[Short description of this skill or service area.]',
  },
  {
    icon: '(｡•̀ᴗ-):･ﾟ✧',
    title: 'Art',
    description: '[Short description of this skill or service area.]',
  },
  {
    icon: '╮(︶▽︶)╭',
    title: 'Music',
    description: '[Short description of this skill or service area.]',
  },
]
</script>
