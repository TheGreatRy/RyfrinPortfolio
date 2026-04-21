<template>
  <div class="page-projects">
    <DraggablePanel
      v-for="(project, i) in projects"
      :key="project.title"
      :title="project.title"
      :initial-x="20 + i * 45"
      :initial-y="12 + i * 42"
      :width="610"
      :height="240"
    >
      <div class="project-window">
        <div class="project-image">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="`${project.title} screenshot`"
            @error="e => e.currentTarget.replaceWith(makePlaceholder())"
          />
          <div v-else class="img-placeholder">[ NO SCREENSHOT ]</div>
        </div>
        <div class="project-info">
          <p class="project-tags">{{ project.tags.join(' · ') }}</p>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-links">
            <a v-if="project.demo"   :href="project.demo"   class="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>
            <a v-if="project.github" :href="project.github" class="btn btn-outline"  target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    </DraggablePanel>
  </div>
</template>

<script setup>
import DraggablePanel from '../components/DraggablePanel.vue'

const base = import.meta.env.BASE_URL

function makePlaceholder() {
  const div = document.createElement('div')
  div.className = 'img-placeholder'
  div.textContent = '[ NO SCREENSHOT ]'
  return div
}

const projects = [
  {
    title: 'Channel 329: Crimes of the Magically Inclined',
    tags: ['cool', 'awesome', 'this took way too long'],
    description: 'A passion project that I started for my Capstone for my degree. It is a detective game with a unique battling mechanic for the Nintendo DS console',
    image: `${base}images/project1.png`,
    demo: null,
    github: 'https://github.com/TheGreatRy/Channel329',
  },
  {
    title: 'Tetradle',
    tags: ['wordle', 'tetris', 'who invited this guy...?'],
    description: '2 Player Co-Op Wordle and Tetris application. This is very cool and awesome, trust',
    image: `${base}images/project2.png`,
    demo: null,
    github: 'https://github.com/TheGreatRy/tetradle',
  },
  {
    title: 'C Plus Sandbox',
    tags: ['custom engine', 'experimental', 'variety'],
    description: "A collection of projects that allow users to interact with different simulators and games. It's meant to be messed around with no specific goal in mind",
    image: null,
    demo: null,
    github: 'https://github.com/TheGreatRy/CPlusSandbox',
  },
]
</script>
